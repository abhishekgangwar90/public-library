import React, { Suspense } from 'react';
import styled from 'styled-components';
import Library from './pages/Library';

export const AppContainer = styled.div`
  min-height: 100vh;
  height: 100vh;
  font-size: calc(10px + 2vmin);
`;

const App: React.FunctionComponent<any> = () => {
  return (
    <AppContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <Library />
      </Suspense>
    </AppContainer>
  );
};

export default App;
