// src/components/Projects.tsx
import styled from "styled-components";

// Typ för projektinformationen
type Project = {
    name: string;
    description: string;
    image: string;
    caption: string;
    gitHubLink: string;
};

// Din lista över projekt
const projects: Project[] = [
    { name: "Tic-tac-toe", description: "Ett tre-i-rad för två personer", image:"assets/tictactoe.png", caption: "Tic-Tac-Toe", gitHubLink: "https://annkar73.github.io/tic-tac-toe/" },
    { name: "Memory", description: "Ett memoryspel av enklare slag.", image:"assets/memory.png", caption: "Memory", gitHubLink: "https://annkar73.github.io/memory-game/" },
    { name: "Kalender med klocka", description: "En enkel kalender med klocka", image:"assets/clock.png", caption: "Kalender med klocka", gitHubLink: "https://annkar73.github.io/calendar/" },
    { name: "Lottogenerator", description: "En slumpgenerator för olika sifferspel, bland annat Lotto.", image:"assets/lotto.png", caption: "Lottogenerator", gitHubLink: "https://annkar73.github.io/lotto-generator/" },
    { name: "Konversationstartare", description: "En slumpgenerator för olika samtalsämnen.", image:"assets/snackis.png", caption: "Konversationsstartare", gitHubLink: "https://annkar73.github.io/vue-conversation-starters/" },
];

// Styled Components
const ProjectList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`;

const ProjectItem = styled.div`
    width: 300px;
    background: #f0f0f0;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    overflow: hidden;
`;

const ProjectFigure = styled.figure`
    margin: 0;
    position: relative;
`;

const ProjectImage = styled.img`
    width: 100%;
    height: auto;
`;

const ImageCaption = styled.figcaption`
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: white;
    background: rgba(0, 0, 0, 0.6);
    padding: 5px 10px;
    border-radius: 4px;
`;

const ProjectContent = styled.div`
    padding: 16px;
`;

const ProjectTitle = styled.h3`
    margin: 0 0 10px 0;
`;

const ProjectDescription = styled.p`
    margin: 0 0 20px 0;
`;

const GitHubButton = styled.button`
    padding: 10px 20px;
    background: #0073e6;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background: #005bb5;
    }
`;

// Själva Projects-komponenten
export const Projects = () => {
    const goToGitHub = (link: string) => {
        window.open(link, "_blank");
    };

    return (
        <ProjectList>
            {projects.map((project, index) => (
                <ProjectItem key={index}>
                    <ProjectFigure>
                        <ProjectImage src={project.image} alt={project.name} />
                        <ImageCaption>{project.caption}</ImageCaption>
                    </ProjectFigure>
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
    );
};
