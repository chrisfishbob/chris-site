import "./blog.styles.scss";
import DeloitteBlog from "../../components/left-column-items/deloitte-blog/deloitte-blog.component";
import SpainBlog from "../../components/left-column-items/spain-blog/spain-blog.component";
import CitizenShipBlog from "../../components/left-column-items/bowling-blog/bowling-blog.component";
import AwsBlog from "../../components/left-column-items/aws-blog/aws-blog.component";
import AboutMeBlog from "../../components/right-column-items/about-me/about-me.component";
import LetsConnectBlog from "../../components/right-column-items/lets-connect/lets-connect.component";
import SiteInfoBlog from "../../components/right-column-items/site-info/site-info.component";
import Footer from "../../components/footer/footer.component";
import BlogIntro from "../../components/blog-intro/blog-intro.component";
import { Fragment } from "react";

function Blog() {
  return (
    <Fragment>
      <BlogIntro />
      <div className="row">
        <div className="left-column" id="l">
          <AwsBlog />
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
      <Footer />
    </Fragment>
  );
}

export default Blog;
