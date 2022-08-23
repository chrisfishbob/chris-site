import "./my-story.styles.scss";
import DeloitteBlog from "./blog-entries/deloitte-blog.component";
import SpainBlog from "./blog-entries/spain-blog.component";
import CitizenShipBlog from "./blog-entries/us-citizenship-blog.component";
import AboutMeBlog from "./blog-entries/about-me.component";
import LetsConnectBlog from "./blog-entries/lets-connect-blog.component";

function MyStory() {
  const obama =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/1200px-President_Barack_Obama.jpg";

  const poly =
    "https://gradbusiness.calpoly.edu/wp-content/uploads/2020/11/20200113-CPAerials-SP0062.jpg";

  return (
    <div>
      <div className="row">
        <div className="left-column" id="l">
          <DeloitteBlog />
          <SpainBlog />
          <CitizenShipBlog />
        </div>

        <div className="right-column" id="r">
          <AboutMeBlog />
          <LetsConnectBlog/>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default MyStory;
