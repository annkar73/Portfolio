import { styled } from 'styled-components';
import { PageWrapper, StrongP, StyledH2, StyledList, StyledP } from '../components/styled/StyledComponents';
import { breakpoints, colors } from '../helpers/variables';

const AboutPageWrapper = styled(PageWrapper)`
  display: flex;
  justify-content: flex-start; /* lägger innehållet i överkant av sidan */
  align-items: center; /* Centrerar innehållet vertikalt */
  min-height: 100vh;
  background-color: transparent; /* Transparent bakgrund, ingen effekt */
`;

export const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* En kolumn på mobil */
  gap: 30px;
  border-radius: 16px;
  background-color: rgb(255, 255, 255, 0.1);
  box-shadow: 0 5px 10px rgba(255, 255, 255, 0.7);
  margin: 0 0 20px 0;
  padding: 30px 20px;
  width: 90vw;
  align-items: center;
  justify-content: center;
  max-width: 1200px; /* Maxbredd för innehållet */
  padding: 20px;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: 70% 30%; /* Två kolumner på tablet och desktop */
  }
`;

const TextWrapper = styled.div`
  background-color: ${colors.beige};
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.7); /* Ljus skugga på textblock */
  width: 100%;
  margin: 0;
  box-sizing: border-box;

  @media (min-width: ${breakpoints.tablet}) {
    width: 100%;
    height: 100%;
    margin: 15px;
  }
`;

const SlimWrapper = styled(TextWrapper)`
  @media (min-width: ${breakpoints.tablet}) {
    width: 90%;
    margin: 15px
    
  }
`;

export const About = () => {
  return (
    <AboutPageWrapper>
      <AboutWrapper>
        <TextWrapper>
          <StyledH2>Om mig</StyledH2>
          <StyledP>
            Efter ett mycket varierande arbetsliv som har gett mig många erfarenheter genom åren har jag nu slutligen bestämt mig för att vidareutveckla ett intresse jag har haft länge, men aldrig riktigt tagit tag i tidigare - 
            jag går sedan oktober 2024 Medieinstitutets 2-åriga YH-utbildning inom Front End Development.
          </StyledP>
          <StyledP>
            Utbildningen är designad för att ge oss bred kunskap och praktiska färdigheter som krävs för att bygga moderna, responsiva och användarvänliga webbapplikationer och omfattar flera viktiga ämnesområden och kurser som ger en holistisk förståelse för front end-utveckling.
          </StyledP>
          <StyledP>
            Inom varje kursmoment ingår arbete både enskilt och i grupp för att vi på detta vis ska få erfarenhet av att samarbeta på olika sätt i projekt av varierande storlek och med olika sammansättningar.
          </StyledP>
          <StyledP>
            Utbildningen är mycket omfattande och har gett mig och mina klasskamrater en solid grund inom front end-utveckling. Genom att kombinera teoretisk undervisning med praktiska projekt har vi fått de färdigheter som behövs för att lyckas i en karriär som Front End Developer. 
            <StrongP>
              Jag ser fram emot att fortsätta utvecklas och använda mina kunskaper för att skapa innovativa och användarvänliga webbapplikationer.
            </StrongP>
          </StyledP>
        </TextWrapper>
        <SlimWrapper>
          <StyledH2>Kurser som ingår</StyledH2>
          <StyledList>
            <li>HTML</li>
            <li>CSS och SCSS</li>
            <li>Grundkurs JavaScript</li>
            <li>Agila metoder</li>
            <li>API-utveckling</li>
            <li>Arbetsmetodik</li>
            <li>Grafisk design</li>
            <li>UX/UI</li>
            <li>Testning</li>
            <li>Avancerad JavaScript - Vue & React</li>
            <li>Lärande i Arbete (LIA) 1 - Praktikperiod</li>
            <li>Examensarbete</li>
            <li>Lärande i Arbete (LIA) 2 - Praktikperiod</li>
          </StyledList>
        </SlimWrapper>
      </AboutWrapper>
    </AboutPageWrapper>
  );
};
