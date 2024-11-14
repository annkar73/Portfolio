import { PageWrapper } from "../components/styled/StyledComponents";
import { ProjectItem } from "../components/ProjectItem";
import { projects } from "../helpers/projectsData";
import { ProjectList } from "../components/styled/StyledProject";


export const Projects = () => {
    return (
        <PageWrapper>
            <ProjectList>
            {projects.map((project, index) => (
                <ProjectItem key={index} project={project} alternate={index % 2 === 1} />
            ))}
            </ProjectList>
        </PageWrapper>
    );
};