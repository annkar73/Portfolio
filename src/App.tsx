import styled from 'styled-components';
import { Projects } from './pages/Projects';
import { Header } from './components/Header';
import './main.css';

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const App = () => {
  return (
    <Container>
        <Header />
      <h1>My Portfolio</h1>
      <Projects />
      
    </Container>
  );
};

export default App;
