import { PageWrapper, StrongP, StyledH2, StyledList, StyledP, TextWrapper } from '../components/styled/StyledComponents'


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

