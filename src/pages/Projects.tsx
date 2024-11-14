import styled from "styled-components";
import { colors, breakpoints, fontSizes } from "../helpers/variables";
import { PageWrapper } from "../components/styled/StyledComponents";
import { ProjectList, ProjectItem, ImageContainer, ProjectImage, ProjectContent, ProjectTitle, ProjectDescription, GitHubButton } from "../components/styled/StyledProject";

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
