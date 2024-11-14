import styled from "styled-components";
import { breakpoints, fontSizes, colors } from "../../helpers/variables";

// HeroImage
export const HeroSection = styled.section`
  background-image: url('/assets/mosaic.jpg'); 
  background-size: cover;
  width: 100vw;
  background-position: center;
  height: 350px; 
  padding: 20px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white}; 
  text-align: center;
`;


// styled containers
export const HeroTextContainer = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
  }
`;


export const PageWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 25px;
    background-color: transparent;
    width: 100vw;
`;



export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255, 0.1);
  box-shadow: 0 5px 10px rgba(255, 255, 255, 0.7);
  border-radius: 16px;
  width: 90%;
  height: auto;
  //align-self: center;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin: auto;
  box-sizing: border-box;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.beige};
  border-radius: 16px;
  margin: 0;
  width: 90%;
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

export const HomeTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.beige};
  border-radius: 16px;
  margin: 20px 0;
  width: 90%;
  height: auto;
  align-self: center;
  padding: 25px;
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
  }
`;



export const StyledBlock = styled.div`
  color: ${colors.dark};
  font-size: ${fontSizes.basic};
  margin: 10px;
  line-height: 1.5;
`;


// Styled titles
export const Title = styled.h1`
  font-size: ${fontSizes.xxxLarge};
  margin: 15px auto;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 3rem;
  }
`;

export const StyledH1 = styled.h1`
  color: ${colors.dark};
  margin: 30px 0;
  padding: 10px;
  text-align: center;
  font-size: ${fontSizes.xxxLarge};
`;


export const StyledH2 = styled.h2`
  color: ${colors.dark};
  font-size: ${fontSizes.xxLarge};
  margin: 15px;
  padding: 10px;
  text-align: center;
`;


// Styled texts

export const StyledP = styled.p`
  color: ${colors.dark};
  font-size: ${fontSizes.basic};
  margin: 10px;
  line-height: 1.5;
  text-align: left;
  padding-left: 15px;
  text-indent: -15px;
`;

export const StrongP = styled(StyledP)`
  font-weight: bold;
  font-size: ${fontSizes.large};
  padding-left: 0;
  text-indent: 0;
  text-align: left;
  margin-top: 15px;
  width: 100%;
`;



// Styled Images
export const StyledImg = styled.img`
  width: 90%;
  height: auto;
  border-radius: 16px;
  max-width: 200px;
  margin: 25px 0 0 0;
`;

export const HomeImg = styled.img`
  width: 90%;
  height: auto;
  border-radius: 16px;
  max-width: 200px;
  margin: 25px 0 0 0;
`;


// Styled lists

export const StyledList = styled.ul`
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

export const ContactList = styled.ul`
  list-style-type: none;
  text-align: left;
`;



// Styled links

export const StyledLink = styled.a`
  color: ${colors.accent};
  font-size: ${fontSizes.large};
  margin: 0;
  padding: 0;
`;
