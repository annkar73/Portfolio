
import { styled } from 'styled-components';
import { HeroSection, HomeImg, Title, PageWrapper, StyledBlock, StyledP, HeroTextContainer, StrongP, TextWrapper } from '../components/styled/StyledComponents';
import { breakpoints } from '../helpers/variables';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255, 0.1);
  box-shadow: 0 5px 10px rgba(255, 255, 255, 0.7);
  border-radius: 16px;
  width: 90%;
  height: auto;
  align-self: center;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin: 0;
  box-sizing: border-box;

  @media (min-width: ${breakpoints.tablet}) {
    width: 80%;
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 55%;
  }
`;

const HomeTextWrapper = styled(TextWrapper)`
    @media (min-width: ${breakpoints.tablet}) {
    width: 100%;
    align-self: center;
    flex-direction: row;
    justify-content: space-around;
  }

`;

const ContactSpan = styled(StrongP)`
  text-align: left;
  margin: 5px 0;

`;


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
        <HomeWrapper>
      <HomeTextWrapper>
      <StyledBlock>
        <StyledP>Och så borde jag få in lite kort information här</StyledP>
      </StyledBlock>
      </HomeTextWrapper>
      </HomeWrapper>
      </PageWrapper>

    </div>
  );
};

export { Home };
