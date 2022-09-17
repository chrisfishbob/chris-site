import "./footer.styles.scss";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Footer() {
  return (
    <AnimationOnScroll
      animateIn="animate__fadeIn"
      animateOut="animate__fadeOut"
      offset={0}
      duration={1}
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
