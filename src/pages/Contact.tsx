
import { PageWrapper, StyledH1, StyledBlock, StyledImg, StrongP, StyledLink, ContactList, AboutWrapper, TextWrapper } from "../components/styled/StyledComponents";


export const Contact = () => {
  return (
    <>
      <PageWrapper>
      <StyledH1>Kontakt</StyledH1>

        <AboutWrapper>
          <TextWrapper>
          <StyledBlock>
            <StyledImg src="./assets/anna2.jpg"></StyledImg>
          </StyledBlock>

          <StyledBlock>
            <StrongP>Kontakta mig via e-post:</StrongP>
            <StyledLink href="mailto:karlsen1973@outlook.com">karlsen1973@outlook.com</StyledLink>
            <StrongP>Se mer på</StrongP>
            <ContactList>
              <li>{" "}
              <StyledLink href="https://www.linkedin.com/in/annakarlsen/">LinkedIn</StyledLink>

              </li>
              <li>{" "}
              <StyledLink href="https://github.com/annkar73">GitHub</StyledLink>

              </li>
            </ContactList>
          </StyledBlock>
          </TextWrapper>
        </AboutWrapper>
      </PageWrapper>
    </>
  );
};
