import "./bowling-blog.styles.scss";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

function BowlingBlog() {
  const usa = "https://d34316robnoe1k.cloudfront.net/bowling.jpeg";

  return (
    <AnimationOnScroll
      animateIn="animate__backInLeft"
      animateOut="animate__fadeOut"
      offset={100}
      duration={1}
    >
      <div className="bowling-blog-container">
        <h1> A Bowling Legend</h1>
        <h3> May, 2022</h3>
        <img className="bowling-img" src={usa} />
        <p>A successful school year capped off with a round of bowling!</p>
        <p>
          Our team may have finished last, but we had the most fun, so who's the
          real winner here?
        </p>
      </div>
    </AnimationOnScroll>
  );
}

export default BowlingBlog;
