import "./lets-connect.styles.scss"
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

function LetsConnectBlog() {
  return (
    <AnimationOnScroll
      animateIn="animate__backInRight"
      animateOut="animate__fadeOut"
      offset={100}
      duration={1}
    >
    <div className="lets-connect-container">
      <h1> Let's Connect! </h1>
      <a href="tel:+9494452477" target="_blank">
        949-445-2477
      </a>
      <br />
      <br />
      <a href="mailto: iamchrishsu@gmail.com" target="_blank">
        iamchrishsu@gmail.com{" "}
      </a>
      <br />
      <br />
      <a href="https://linkedin.com/in/hsuc/" target="_blank">
        LinkedIn{" "}
      </a>
      <br />
      <br />
      <a href="https://github.com/chrisfishbob" target="_blank">
        GitHub{" "}
      </a>
    </div>
    </AnimationOnScroll>
  );
}

export default LetsConnectBlog;
