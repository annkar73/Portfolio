import { styled } from "styled-components";
import { breakpoints, colors, fontSizes } from "../helpers/variables";

const PageWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 25px;
    background-color: transparent;
    width: 100vw;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.beige};
  border-radius: 16px;
  margin: 50px 0 0 0;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  padding: 15px; 
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); 

  @media (min-width: ${breakpoints.tablet}) {
    width: 80%;
    align-self: center;
  }
`;
const StyledH2 = styled.h2`
  color: ${colors.dark};
  font-size: ${fontSizes.xxLarge};
  margin: 15px;
  padding: 10px;
  text-align: center;
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
const StrongP = styled(StyledP)`
  font-weight: bold;
  font-size: ${fontSizes.large};
  padding-left: 0;
  text-indent: 0;
  text-align: left;
  margin-top: 15px;
  width: 100%;
`;


const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: 100%;
  justify-content: center;
  line-height: 1.5;
  text-align: left;
  font-size: ${fontSizes.basic};
  padding: 5px;
`;


export const About = () => {
    return (
        <>
        <PageWrapper>
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
<TextWrapper>
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
      <li>Testning </li>
      <li>Avancerad JavaScript - Vue & React</li>
      <li>Lärande i Arbete (LIA) 1 - Praktikperiod</li>
      <li>Examensarbete</li>
      <li>Lärande i Arbete (LIA) 2 - Praktikperiod</li>

  </StyledList>

</TextWrapper>
</PageWrapper>

        
        </>
    )
}

