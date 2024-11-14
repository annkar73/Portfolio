// src/pages/Home.tsx
import styled from 'styled-components';
import { breakpoints, colors } from '../helpers/variables';

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

const StyledImg = styled.img`
  width: 100%;
  border-radius: 16px;
  max-width: 200px;
  margin: 25px;
  position: absolute;
  left: 20%;

  @media (min-width: ${breakpoints.tablet}) {
    left: 0;
  }
`;

const Home = () => {
  return (
    <div>
      <HeroSection>
      <StyledImg src='./assets/anna2.jpg'></StyledImg>

        <Title>Anna Karlsen</Title>
      </HeroSection>

    </div>
  );
};

export { Home };
