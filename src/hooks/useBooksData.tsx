/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from 'react';
import { fetchBooksData } from '../api';

export function useBooksData(): any {
  const [resources, updateState] = useState([]);

  const fetchData = async () => {
    const response = await fetchBooksData();
    updateState(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return resources;
}
