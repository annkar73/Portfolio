
import { PageWrapper, StyledH1, StyledBlock, StyledImg, StrongP, StyledLink, ContactList, AboutWrapper, TextWrapper, ContactWrapper } from "../components/styled/StyledComponents";


export const Contact = () => {
  return (
    <>
      <PageWrapper>
      <StyledH1>Kontakt</StyledH1>

        <ContactWrapper>
          <TextWrapper>
          <StyledBlock>
            <StyledImg src="./assets/anna2.jpg"></StyledImg>
          </StyledBlock>

          <StyledBlock>
            <StrongP>Kontakta mig via e-post:</StrongP>
            <StyledLink href="mailto:karlsen1973@outlook.com">karlsen1973@outlook.com</StyledLink>
            <StrongP>Se mer på{" "}
              <StyledLink href="https://www.linkedin.com/in/annakarlsen/">LinkedIn</StyledLink> och {" "}
              <StyledLink href="https://github.com/annkar73">GitHub</StyledLink>
              </StrongP> 
            
          </StyledBlock>
          </TextWrapper>
        </ContactWrapper>
      </PageWrapper>
    </>
  );
};
