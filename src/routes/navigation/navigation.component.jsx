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
          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>
          <Link className="nav-link" to="/info">
            INFO
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
