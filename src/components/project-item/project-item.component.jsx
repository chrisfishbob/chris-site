import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./project-item.styles.scss";

// Used for both projects and pages directory
const ProjectItem = ({ project }) => {
  const { imageUrl, title, externalUrl, subtitle, openNewTab } = project;
  if (openNewTab) {
    return (
      <Fragment>
        <a
          className="project-container"
          href={externalUrl}
          target="_blank"
        >
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
  }

  else {
    return (
      <Fragment>
        <Link
          className="project-container"
          to={externalUrl}
        >
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
        </Link>
      </Fragment>
    );
  }
};

export default ProjectItem;
