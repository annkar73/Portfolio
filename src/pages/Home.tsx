// src/pages/Home.tsx
import styled from 'styled-components';
import { breakpoints, colors, fontSizes } from '../helpers/variables';

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

const StyledContainer = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
  }
`

const Title = styled.h1`
  font-size: 3rem;
  margin: auto;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
`;

const StyledImg = styled.img`
  width: 100%;
  border-radius: 16px;
  max-width: 200px;
  margin: 25px;
`;

const StyledP = styled.p`
  color: ${colors.dark};
  font-size: ${fontSizes.basic};
  font-weight: bold;
  margin: 15px 0;
  line-height: 1.5;
  text-align: left;
`;
const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  background-color: transparent;
`;


const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.beige};
  border-radius: 16px;
  margin: 20px 0;
  width: 90%;
  height: auto;
  align-self: center;
  padding: 25px;
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
  }
`;


const StyledBlock = styled.div`
  color: ${colors.dark};
  font-size: ${fontSizes.basic};
  margin: 10px;
  line-height: 1.5;
`;

const Home = () => {
  return (
    <div>
      <HeroSection>
        <StyledContainer>
      <StyledImg src='./assets/anna2.jpg'></StyledImg>

        <Title>Anna Karlsen</Title>
        </StyledContainer>
      </HeroSection>
      <PageWrapper>
      <TextWrapper>
      <StyledBlock>
        <StyledP>Och så borde jag få in lite kort information här</StyledP>
      </StyledBlock>
      </TextWrapper>
      </PageWrapper>

    </div>
  );
};

export { Home };
