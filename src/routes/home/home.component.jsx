import "./home.styles.scss";
import DeloitteBlog from "../../components/left-column-items/deloitte-blog/deloitte-blog.component";
import Footer from "../../components/footer/footer.component";
import { Fragment } from "react";

function MyStory() {
  return (
    <Fragment>
      <div className="row">
        <div className="left-column" id="l">
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
