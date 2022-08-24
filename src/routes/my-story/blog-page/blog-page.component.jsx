import "./blog-page.styles.scss";
import DeloitteBlog from "../left-column-items/deloitte-blog/deloitte-blog.component";
import SpainBlog from "../left-column-items/spain-blog/spain-blog.component";
import CitizenShipBlog from "../left-column-items/bowling-blog/bowling-blog.component";
import AboutMeBlog from "../right-column-items/about-me/about-me.component";
import LetsConnectBlog from "../right-column-items/lets-connect/lets-connect.component";
import SiteInfoBlog from "../right-column-items/site-info/site-info.component";
import Footer from "../footer/footer.component";
import { Fragment } from "react";

function MyStory() {
  return (
    <Fragment>
      <div className="row">
        <div className="left-column" id="l">
          <DeloitteBlog />
          <SpainBlog />
          <CitizenShipBlog />
        </div>

        <div className="right-column" id="r">
          <AboutMeBlog />
          <SiteInfoBlog />
          <LetsConnectBlog />
        </div>
      </div>

      <Footer/>

    </Fragment>
  );
}

export default MyStory;
