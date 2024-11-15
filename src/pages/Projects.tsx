import { PageWrapper } from "../components/styled/StyledComponents";
import { ProjectItem } from "../components/ProjectItem";
import { projects } from "../helpers/projectsData";
import { ProjectList, StyledH1 } from "../components/styled/StyledProject";


export const Projects = () => {
    return (
        <PageWrapper>
                  <StyledH1>Mina projekt</StyledH1>

            <ProjectList>
            {projects.map((project, index) => (
                <ProjectItem key={index} project={project} alternate={index % 2 === 1} />
            ))}
            </ProjectList>
        </PageWrapper>
    );
};