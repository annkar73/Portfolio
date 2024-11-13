import React from 'react';
import styled from 'styled-components';
import { Projects } from './pages/Projects';

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const App = () => {
  return (
    <Container>
      <h1>My Portfolio</h1>
      <Projects />
      
    </Container>
  );
};

export default App;
