import "./footer.styles.scss";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Footer() {
  return (
    <AnimationOnScroll
      animateIn="animate__fadeIn"
      offset={0}
      duration={1}
      animateOnce={true}
    >
      <div className="footer">
        <a href="https://github.com/chrisfishbob/chris-site" target="_blank">
          <p> Chris Hsu 2022 &nbsp;&nbsp;&nbsp; Made with ReactJS</p>
        </a>
      </div>
    </AnimationOnScroll>
  );
}

export default Footer;
