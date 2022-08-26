import "./deloitte-blog.styles.scss"
import Projects from "../../../routes/projects/projects.component";

function DeloitteBlog() {
  const deloitte_boat =
    "https://d34316robnoe1k.cloudfront.net/deloitte_boat.jpg";

  return (
    <div className="deloitte-blog-container">
      <h1> My Projects</h1>
      {/* <img className="deloitte-img" src={deloitte_boat} /> */}
      <Projects/>
    </div>
  );
}

export default DeloitteBlog;