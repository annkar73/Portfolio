import { styled } from "styled-components";
import { breakpoints, colors, fontSizes } from "../helpers/variables";

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
  width: 100%;
  height: auto;
  padding: 25px;
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
  }
`;

const StyledH1 = styled.h1`
  color: ${colors.dark};
  margin: 30px 0;
  padding: 10px;
  text-align: center;
  font-size: ${fontSizes.xxxLarge};
`;


const StyledP = styled.p`
  color: ${colors.dark};
  font-size: ${fontSizes.basic};
  font-weight: bold;
  margin: 15px 0;
  line-height: 1.5;
  text-align: left;
`;


const StyledBlock = styled.div`
  color: ${colors.dark};
  font-size: ${fontSizes.basic};
  margin: 10px;
  line-height: 1.5;
`;
const StyledList = styled.ul`
  list-style-type: none;
  text-align: left;
`;

const StyledLink = styled.a`
  color: ${colors.accent};
  font-size: ${fontSizes.large};
  margin: 0;
  padding: 0;
`;

const StyledImg = styled.img`
  width: 100%;
  border-radius: 16px;
  max-width: 250px;
`;

export const Contact = () => {
  return (
    <>
      <PageWrapper>
      <StyledH1>Kontakt</StyledH1>

        <TextWrapper>
          <StyledBlock>
            <StyledImg src="./assets/anna2.jpg"></StyledImg>
          </StyledBlock>

          <StyledBlock>
            <StyledP>Kontakta mig via e-post:</StyledP>
            <StyledLink href="mailto:karlsen1973@outlook.com">karlsen1973@outlook.com</StyledLink>
            <StyledP>Se mer på</StyledP>
            <StyledList>
              <li>{" "}
              <StyledLink href="https://www.linkedin.com/in/annakarlsen/">LinkedIn</StyledLink>

              </li>
              <li>{" "}
              <StyledLink href="https://github.com/annkar73">GitHub</StyledLink>

              </li>
            </StyledList>
          </StyledBlock>
        </TextWrapper>
      </PageWrapper>
    </>
  );
};
