import "./bowling-blog.styles.scss";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

function AwsBlog() {
  const aws = "https://d34316robnoe1k.cloudfront.net/aws.jpg";

  return (
    <AnimationOnScroll
      animateIn="animate__fadeInLeft"
      offset={100}
      duration={1}
      animateOnce={true}
    >
      <div className="aws-blog-container">
        <h1> Up in the Cloud</h1>
        <h3> Jan, 2023 - Present</h3>
        <img className="aws-img" src={aws} alt="AWS" />
        <p>Working part-time during school for 16 hours a week, Winter quarter was pretty challenging ...</p>
        <p>Now working full-time during the Summer at AWS, keeping the cloud safe!</p>
      </div>
    </AnimationOnScroll>
  );
}

export default AwsBlog;
