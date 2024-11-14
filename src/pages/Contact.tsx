import { styled } from "styled-components";
import { colors, fontSizes } from "../helpers/variables";

const PageWrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 25px;
  background-color: transparent;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.beige};
  border-radius: 16px;
  margin: 50px 0;
  width: 100%;
  height: auto;
  padding: 25px;
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
`;

const StyledH2 = styled.h2`
  color: ${colors.dark};
  margin: 15px;
  padding: 10px;
  text-align: center;
  font-size: ${fontSizes.xxLarge};
`;

const StyledH3 = styled.h3`
    color: ${colors.dark};
  margin: 15px;
  padding: 10px;
  text-align: center;
  font-size: ${fontSizes.xLarge};

`;
const StyledP = styled.p`
  color: ${colors.dark};
  font-size: ${fontSizes.basic};
  margin: 10px;
  line-height: 1.5;
  text-align: left;
  padding-left: 15px;
  text-indent: -15px;
`;


const StyledBlock = styled.div`
  color: ${colors.dark};
  font-size: ${fontSizes.basic};
  margin: 10px;
  line-height: 1.5;
`;
const StyledList = styled.ul`
  list-style-type: none;
`;

const StyledLink = styled.a`
  color: ${colors.accent};
  font-size: ${fontSizes.large};
`;

const StyledImg = styled.img`
  width: 100%;
  border-radius: 16px;
`;

export const Contact = () => {
  return (
    <>
      <PageWrapper>
        <TextWrapper>
          <StyledH2>Kontakt</StyledH2>
          <StyledBlock>
            <StyledP>Kontakta mig via e-post: </StyledP>
            <StyledLink href="mailto:karlsen1973@outlook.com"> karlsen1973@outlook.com</StyledLink>
          </StyledBlock>
          <StyledBlock>
            <StyledImg src="./assets/anna2.jpg"></StyledImg>
          </StyledBlock>
          <StyledBlock>
            <StyledH3>Se mer på</StyledH3>
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
