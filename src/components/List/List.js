import { useEffect, useRef } from 'react';
import { ListWrapper, ListBlock, CardContainer } from './ListStyle';
import { Card } from 'antd';
import Loading from '../Loading/Loading';
import usePost from '../../hooks/usePost';

const Header = () => {
  const ref = useRef();
  const {
    listData,
    isLoading,
    setIsLoading,
    pageRef,
    totalPage,
    getData
  } = usePost();

  useEffect(() => {
    const options = {
      options: null, // Defaults to the browser viewport
      rootMargin: "-20px",
      threshold: 1
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (pageRef.current >= totalPage.current) return;
          pageRef.current++;
          setIsLoading(true);
          setTimeout(() => {
            getData();
            observer.disconnect();
          }, 500);
        }
      },
      options
    );
    if (ref.current) observer.observe(ref.current);
  }, [ref, listData, getData, pageRef, setIsLoading, totalPage]);

  return (
    <ListWrapper>
      <h1>My GitHub public repos</h1>
      <ListBlock>
        {
          listData.length > 0 &&
          listData.map((list, index) =>
            index + 1 === listData.length ?
              (
                <CardContainer ref={ref} key={index}>
                  <Card title={list.name} bordered={false}>
                    <p>Description：{list.description}</p>
                    <p>Url：<a href={list.html_url}>{list.html_url}</a></p>
                  </Card>
                </CardContainer>
              ) :
              (
                <CardContainer key={index}>
                  <Card title={list.name} bordered={false}>
                    <p>Description：{list.description}</p>
                    <p>Url：<a href={list.html_url}>{list.html_url}</a></p>
                  </Card>
                </CardContainer>
              )
          )
        }
        {isLoading && <Loading />}
      </ListBlock>
    </ListWrapper>
  )
};

export default Header;
