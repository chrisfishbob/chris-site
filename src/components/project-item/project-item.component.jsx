import { Fragment } from "react";
import "./project-item.styles.scss";

// Used for both projects and pages directory
const ProjectItem = ({ project }) => {
  const { imageUrl, title, externalUrl, subtitle, openNewTab } = project;
  return (
    <Fragment>
      <a className="project-container" href={externalUrl} target={openNewTab ? "_blank": ""}>
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <div className="project-body-container">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      </a>
    </Fragment>
  );
};

export default ProjectItem;
