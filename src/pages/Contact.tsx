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

const StyledP = styled.p`
  color: ${colors.dark};
  font-size: ${fontSizes.basic};
  margin: 10px;
  line-height: 1.5;
`;

const StyledLink = styled.a`
  color: ${colors.accent};
  font-size: ${fontSizes.large};
`;

export const Contact = () => {
  return (
    <>
      <PageWrapper>
        <TextWrapper>
          <StyledH2>Kontakt</StyledH2>
          <StyledP>
            Kontakta mig via e-post: 
            <StyledLink href="mailto:karlsen1973@outlook.com"> karlsen1973@outlook.com</StyledLink>
          </StyledP>
          <StyledP>
            Se mer på
            <ul>
              <li>{" "}
              <StyledLink href="https://www.linkedin.com/in/annakarlsen/">LinkedIn</StyledLink>

              </li>
              <li>{" "}
              <StyledLink href="https://github.com/annkar73">GitHub</StyledLink>

              </li>
            </ul>
          </StyledP>
        </TextWrapper>
      </PageWrapper>
    </>
  );
};
