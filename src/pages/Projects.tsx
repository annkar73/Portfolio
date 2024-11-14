import styled from "styled-components";
import { colors, breakpoints, fontSizes } from "../helpers/variables";

type Project = {
    name: string;
    description: string;
    image: string;
    caption: string;
    gitHubLink: string;
};

const projects: Project[] = [
    { name: "Tic-tac-toe", description: "Ett tre-i-rad för två personer. Skrivet i Vue och TypeScript", image: "assets/tictactoe.png", caption: "Tic-Tac-Toe", gitHubLink: "https://annkar73.github.io/tic-tac-toe/" },
    { name: "Memory", description: "Ett memoryspel av enklare slag. Skrivet i Vue och TypeScript", image: "assets/memory.png", caption: "Memory", gitHubLink: "https://annkar73.github.io/memory-game/" },
    { name: "Kalender med klocka", description: "En enkel kalender med klocka. Skrivet i Vue", image: "assets/clock.png", caption: "Kalender med klocka. Skrivet i Vue, JavaScript och TypeScript", gitHubLink: "https://annkar73.github.io/calendar/" },
    { name: "Lottogenerator", description: "En slumpgenerator för olika sifferspel, bland annat Lotto. Skrivet i Vue och TypeScript", image: "assets/lotto.png", caption: "Lottogenerator", gitHubLink: "https://annkar73.github.io/lotto-generator/" },
    { name: "Konversationstartare", description: "En slumpgenerator för olika samtalsämnen. Skrivet i Vue och TypeScript", image: "assets/snackis.png", caption: "Konversationsstartare", gitHubLink: "https://annkar73.github.io/vue-conversation-starters/" },
];

const PageWrapper = styled.section`
    display: flex;
    justify-content: center;
    padding: 25px;
    background-color: transparent;
`;

const ProjectList = styled.div`
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

const ProjectItem = styled.div<{ alternate: boolean }>`
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

const ImageContainer = styled.div`
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

const ProjectImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover; 
    border-radius: 8px; 
`;

const ProjectContent = styled.div`
    flex: 2;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: first baseline;
`;

const ProjectTitle = styled.h3`
    margin: 0 0 10px 0;
`;

const ProjectDescription = styled.p`
    margin: 0 0 20px 0;
    text-align: left;
`;

const GitHubButton = styled.button`
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

export const Projects = () => {
    const goToGitHub = (link: string) => {
        window.open(link, "_blank");
    };

    return (
        <PageWrapper>
            <ProjectList>
                {projects.map((project, index) => (
                    <ProjectItem key={index} alternate={index % 2 === 1}>
                        <ImageContainer>
                            <ProjectImage src={project.image} alt={project.name} />
                        </ImageContainer>
                        <ProjectContent>
                            <ProjectTitle>{project.name}</ProjectTitle>
                            <ProjectDescription>{project.description}</ProjectDescription>
                            <GitHubButton onClick={() => goToGitHub(project.gitHubLink)}>
                                Se live
                            </GitHubButton>
                        </ProjectContent>
                    </ProjectItem>
                ))}
            </ProjectList>
        </PageWrapper>
    );
};
