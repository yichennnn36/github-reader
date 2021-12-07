import { useState, useEffect, useRef, useCallback } from 'react';
import { fetchData, fetchDataCount } from '../api';

const usePost = () => {
  const [listData, setListData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const pageRef = useRef(1);
  const totalPage = useRef(0);
  const perPage = 4;

  const getData = useCallback(() => {
    const fetchingData = async () => {
      const data = await fetchData(perPage, pageRef.current);
      if (data.length === 0) return setIsLoading(false);

      setTimeout(() => {
        setIsLoading(false);
        setListData(listData => [
          ...listData,
          ...data
        ]);
      }, 500);
    };
    fetchingData();
  }, []);

  useEffect(() => {
    getData();
    const getDataCount = async () => {
      const response = await fetchDataCount();
      const totalCount = await response.length;
      totalPage.current = Math.ceil(totalCount / perPage);
    };
    getDataCount();
  }, [getData]);

  return {
    listData,
    isLoading,
    setIsLoading,
    pageRef,
    totalPage,
    getData
  }
};

export default usePost;