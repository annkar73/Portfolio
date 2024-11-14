import { styled } from "styled-components";
import { breakpoints, colors, fontSizes } from "../../helpers/variables";

export const PageWrapper = styled.section`
    display: flex;
    justify-content: center;
    padding: 25px;
    background-color: transparent;
`;

export const ProjectList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    width: 90vw;
    margin-top: 50px;


    @media (min-width: ${breakpoints.tablet}) {
        width: 55vw;
    }
`;

export const ProjectItem = styled.div<{ alternate: boolean }>`
    display: flex;
    flex-direction: column;
    background: ${colors.beige};
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    width: 100%;
    max-height: 500px;

    @media (min-width: ${breakpoints.tablet}) {
        flex-direction: ${(props) => (props.alternate ? "row-reverse" : "row")};
        height: 200px;
    }
`;

export const ImageContainer = styled.div`
    flex: 1;
    padding: 8px; 
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`;

export const ProjectImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover; 
    border-radius: 8px; 
`;

export const ProjectContent = styled.div`
    flex: 2;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: first baseline;
`;

export const ProjectTitle = styled.h3`
    margin: 0 0 10px 0;
`;

export const ProjectDescription = styled.p`
    margin: 0 0 20px 0;
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
