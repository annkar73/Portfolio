import { styled } from "styled-components";
import { breakpoints, colors, fontSizes } from "../../helpers/variables";

// Wrapper för hela sidan
export const PageWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px;
    background-color: transparent;
`;

// Container för projektlistan
export const ProjectList = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgb(255, 255, 255, 0.1);
    box-shadow: 0 5px 10px rgba(255, 255, 255, 0.7);
    border-radius: 16px;
    gap: 5px;
    width: 90%;
    height: 100%;
    margin-top: 50px;
    align-self: center;
    padding: 10px;

    @media (min-width: ${breakpoints.tablet}) {
        width: 50%;
    }
`;

export const ProjItem = styled.div<{ alternate: boolean }>`
    display: flex;
    flex-direction: column;  // Ställer in vertikal layout för mobilversion
    background: ${colors.beige};
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(255, 255, 255, 0.7);

    //box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    margin: 20px 0;
    padding: 20px;
    width: 100%;
    
    @media (min-width: ${breakpoints.tablet}) {
        flex-direction: ${(props) => (props.alternate ? "row-reverse" : "row")};  // Växla mellan vänster och höger bild
        width: 90%;  // Sätt en bredd på varje card
        align-self: center;
    }
`;

export const ImageContainer = styled.div`
    flex: 1;
    padding: 8px; 
    width: 100%;
    height: auto;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`;

export const ProjectImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;  // Gör så att bilden täcker hela containern utan att bli förvrängd
    border-radius: 8px;
    max-height: 200px;  // Sätt en maxhöjd på bilden för att hålla den hanterbar
`;

export const ProjectContent = styled.div`
    flex: 2;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center; 
 
`;

export const ProjectTitle = styled.h3`
    margin: 0 0 10px 0;
    font-size: ${fontSizes.large};

    @media (min-width: ${breakpoints.tablet}) {
       text-align: left;
    }
`;

export const ProjectDescription = styled.p`
    margin: 0 0 20px 0;
    font-size: ${fontSizes.basic};
    text-align: left;
`;

export const GitHubButton = styled.button`
    padding: 10px 20px;
    background: ${colors.accent};
    color: ${colors.dark};
    font-weight: bold;
    font-size: ${fontSizes.basic};
    text-transform: uppercase;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    align-self: start;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4); 

    &:hover {
        background: darkorange;
    }
`;
