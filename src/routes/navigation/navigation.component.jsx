import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/paw2.png";
import "./navigation.styles.scss";

function Navigation() {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={logo} width={50} />
        </Link>

        <Link className="title" to="/">
          <h1> Chris Hsu</h1>
        </Link>

        <div className="nav-links-container">
          <a
            className="nav-link-resume"
            href="https://racoongrilledcheesecopy.s3.amazonaws.com/LatexResume.pdf"
            target="_blank"
          >
            RESUME
          </a>
          <Link className="nav-link-my-story" to="/projects">
          PROJECTS 
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
