/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const fetchBooksData = async (): Promise<any> => {
  const response = axios.get('./apiData.json');
  return response;
};
