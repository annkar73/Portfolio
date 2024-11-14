import { Project } from "../helpers/projectsData";
import { GitHubButton, ImageContainer, ProjectDescription, ProjectImage, ProjItem, ProjectTitle, ProjectContent } from '../components/styled/StyledProject';

type ProjectItemProps = {
    project: Project;
    alternate?: boolean;
};

export const ProjectItem = ({ project, alternate }: ProjectItemProps) => {
    const goToGitHub = (link: string) => {
        window.open(link, "_blank");
    };

    return (
        <>
        <ProjItem alternate={!!alternate}>
            
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
        </ProjItem>
        </>
    );
};
