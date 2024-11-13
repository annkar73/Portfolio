import styled from 'styled-components';
import './main.css';
import AppRouter from './Router';

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const App = () => {
  return (
    <Container>
    <AppRouter />      
    </Container>
  );
};

export default App;
