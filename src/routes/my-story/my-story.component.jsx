import "./my-story.styles.scss";
import DeloitteBlog from "./blog-entries/deloitte-blog.component";
import SpainBlog from "./blog-entries/spain-blog.component";
import CitizenShipBlog from "./blog-entries/us-citizenship-blog.component";
import AboutMeBlog from "./blog-entries/about-me.component";
import LetsConnectBlog from "./blog-entries/lets-connect-blog.component";
import SiteInfoBlog from "./blog-entries/site-info.component";
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

      <div className="footer">
        <a href="https://github.com/chrisfishbob/chris-site" target="_blank">
          <p> Chris Hsu 2022 &nbsp;&nbsp;&nbsp; Made with ReactJS</p>
        </a>
      </div>
    </Fragment>
  );
}

export default MyStory;
