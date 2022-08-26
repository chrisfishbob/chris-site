import "./home.styles.scss";
import DeloitteBlog from "../../components/my-projects-section/my-projects-section.component";
import Footer from "../../components/footer/footer.component";
import { Fragment } from "react";
import Introduction from "../../components/introduction/introduction.component";
import AboutMe from "../../components/about-me/about-me.component";

function MyStory() {
  return (
    <Fragment>
      <div className="row">
        <div className="left-column" id="l">
          <Introduction /> 
          <AboutMe/>
          <DeloitteBlog />
        </div>

        <div className="right-column" id="r">
          {/* <SiteInfoBlog />
          <LetsConnectBlog /> */}
        </div>
      </div>

      <Footer/>

    </Fragment>
  );
}

export default MyStory;
