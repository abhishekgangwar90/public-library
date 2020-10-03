/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const BookInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2% 0;
  border: 1px solid #e6e6e6;
  box-shadow: 5px 5px 5px 5px #e6e6e6;
  padding: 2%;
`;

export const BookDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BookMetaData = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;

export const BookActions = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BookDescriptionContainer = styled.div`
  display: flex;
  border-top: 1px solid #bababa;
  margin: 2% 0;
`;
