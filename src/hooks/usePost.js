import { useState, useEffect, useRef, useCallback } from 'react';
import { fetchData, fetchDataCount } from '../api';

const usePost = () => {
  const [listData, setListData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const pageRef = useRef(1);
  const totalPage = useRef(0);
  const perPage = 4;

  const fetchingData = async () => {
    try {
      const data = await fetchData(perPage, pageRef.current);
      if (data.length === 0) return setIsLoading(false);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchingDataCount = async () => {
    try {
      const response = await fetchDataCount();
      const totalCount = await response.length;
      totalPage.current = Math.ceil(totalCount / perPage);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = useCallback(() => {
    const fetchingAllData = async () => {
      try {
        const [data] = await Promise.all([
          fetchingData(),
          fetchingDataCount()
        ]);
        if (data.length === 0) return setIsLoading(false);

        setTimeout(() => {
          setIsLoading(false);
          setListData(listData => [
            ...listData,
            ...data
          ]);
        }, 500);
      } catch (error) {
        alert('發生錯誤');
      }
    };
    fetchingAllData();
  }, []);

  useEffect(() => {
    getData();
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