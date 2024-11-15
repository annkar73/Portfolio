
import { styled } from "styled-components";
import { PageWrapper, StyledH1, StyledBlock, StyledImg, StrongP, StyledLink, ContactList, AboutWrapper, TextWrapper } from "../components/styled/StyledComponents";
import { breakpoints } from "../helpers/variables";

const ContactWrapper = styled.div`
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

const ContactTextWrapper = styled(TextWrapper)`
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


export const Contact = () => {
  return (
    <>
      <PageWrapper>

        <ContactWrapper>
          <ContactTextWrapper>
          <StyledBlock>
            <StyledImg src="./assets/anna2.jpg"></StyledImg>
          </StyledBlock>

          <StyledBlock>
            <ContactSpan>Kontakta mig via e-post:</ContactSpan>
            <StyledLink href="mailto:karlsen1973@outlook.com">karlsen1973@outlook.com</StyledLink>
            <ContactSpan>Se mer på{" "}
              <StyledLink href="https://www.linkedin.com/in/annakarlsen/">LinkedIn</StyledLink> och {" "}
              <StyledLink href="https://github.com/annkar73">GitHub</StyledLink>
              </ContactSpan> 
            
          </StyledBlock>
          </ContactTextWrapper>
        </ContactWrapper>
      </PageWrapper>
    </>
  );
};
