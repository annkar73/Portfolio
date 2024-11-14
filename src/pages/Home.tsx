
import { HeroSection, HomeImg, Title, PageWrapper, HomeTextWrapper, StyledBlock, StyledP, HeroTextContainer } from '../components/styled/StyledComponents';


const Home = () => {
  return (
    <div>
      <HeroSection>
        <HeroTextContainer>
      <HomeImg src='./assets/anna2.jpg'></HomeImg>

        <Title>Anna Karlsen</Title>
        </HeroTextContainer>
      </HeroSection>
      <PageWrapper>
      <HomeTextWrapper>
      <StyledBlock>
        <StyledP>Och så borde jag få in lite kort information här</StyledP>
      </StyledBlock>
      </HomeTextWrapper>
      </PageWrapper>

    </div>
  );
};

export { Home };
