import "./spain-blog.styles.scss"
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

function SpainBlog() {
  const spain = "https://d34316robnoe1k.cloudfront.net/spain-2.jpg";

  return (
    <AnimationOnScroll
      animateIn="animate__backInLeft"
      animateOut="animate__fadeOut"
      offset={100}
      duration={1}
    >
    <div className="spain-blog-container">
      <h1> Spain</h1>
      <h3> Summer, 2022</h3>
      <img className="spain-img" src={spain} />
      <p>
        Got to visit Spain briefly for a family vacation! (I look different
        because of the lighting, It's not a drawing).
      </p>
      <p>
        I only took a couple pictures, this being one of them, but Spainish food is amazing. The lack of iced coffee and 
        iced water while it was 110 degrees ... less amazing.</p>
      <p> Editor's review: Very hot outside but a cool place.</p>
      <p> Score: 10 /10</p>
    </div>
    </AnimationOnScroll>
  );
}

export default SpainBlog;
