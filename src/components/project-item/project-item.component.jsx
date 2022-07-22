import { Fragment } from "react";
import "./project-item.styles.scss";

const ProjectItem = ({ project }) => {
  const { imageUrl, title, externalUrl, subtitle } = project;
  return (
    <Fragment>
      <a className="project-container" href={externalUrl} target="_blank">
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
