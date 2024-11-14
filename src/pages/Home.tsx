// src/pages/Home.tsx
import styled from 'styled-components';
import { colors } from '../helpers/variables';

// Styla din Hero-image
const HeroSection = styled.section`
  background-image: url('/assets/mosaic.jpg'); 
  background-size: cover;
  width: 100vw;
  background-position: center;
  height: 300px; 
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white}; 
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
`;

const Home = () => {
  return (
    <div>
      <HeroSection>
        <Title>Anna Karlsen</Title>
      </HeroSection>
     
    </div>
  );
};

export { Home };
