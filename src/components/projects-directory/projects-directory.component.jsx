import ProjectItem from "../project-item/project-item.component";
import "./projects-directory.styles.scss";

const ProjectsDirectory = ({ projects }) => {
  return (
    <div className="project-directory-container">
      {projects.map((projects) => (
        <ProjectItem key={projects.id} project={projects} />
      ))}
    </div>
  );
};

export default ProjectsDirectory;
