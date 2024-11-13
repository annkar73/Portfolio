// src/pages/Home.tsx
import styled from 'styled-components';
import { colors } from '../helpers/variables';

// Styla din Hero-image
const HeroSection = styled.section`
  background-image: url('/assets/mosaic.jpg'); /* Referera till bilden direkt från public-mappen */
  background-size: cover;
  width: 100vw;
  background-position: center;
  height: 400px; /* Justera höjden på din Hero-section */
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white}; /* Om du vill ha text på din bild */
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7); /* Gör texten synligare på bilden */
`;

const Home = () => {
  return (
    <div>
      <HeroSection>
        <Title>Anna Karlsen</Title>
      </HeroSection>
      {/* Här kan du lägga till mer innehåll för sidan */}
    </div>
  );
};

export { Home };
