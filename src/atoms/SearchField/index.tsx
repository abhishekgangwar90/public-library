import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  flex: 1;
  padding: 2%;
  font-size: inherit;

  @media only screen and (max-width: 426px) {
    margin: 2% 0;
  }
`;

const SearchField: React.FunctionComponent<any> = (props) => {
  return <Input {...props} />;
};

export default SearchField;
