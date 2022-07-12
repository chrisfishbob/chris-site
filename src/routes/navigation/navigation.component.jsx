import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/paw2.png"
import "./navigation.styles.scss"

function Navigation() {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
            <img src={logo} width={50}/>
        </Link>

        <div className="links-container">
          <Link className="nav-links-container" to="/shop">
            CONTACT
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
