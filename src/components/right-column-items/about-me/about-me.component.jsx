import "./about-me.styles.scss"
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

function AboutMeBlog() {
  const me = "https://d34316robnoe1k.cloudfront.net/meinspain.JPG";

  return (
    <AnimationOnScroll
      animateIn="animate__fadeInRight"
      offset={100}
      duration={1}
      animateOnce={true}
    >
    <div className="about-me-container">
      <h1> Hi There! </h1>
      <img className={"profile-pic"} src={me} />
      <p> I'm Chris and I'm a Jr. Software Engineer at AWS and a Computer Science student at Cal Poly SLO. </p>
      <p>
        I love all things computing, but I particularily love writing programming languages! I have written a 
        couple languages of my own, and I am currently writing a compiler and virtual machine for my own language!
      </p>
    </div>
    
    </AnimationOnScroll>
  );
}

export default AboutMeBlog;