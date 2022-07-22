import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./project-item.styles.scss";

const ProjectItem = ({ project }) => {
  const { imageUrl, title, urlTitle, subtitle } = project;
  return (
    <Fragment>
      <Link to={urlTitle} className="project-container">
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
};

export default ProjectItem;
