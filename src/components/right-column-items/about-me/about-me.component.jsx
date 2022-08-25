import "./about-me.styles.scss"
import {useState} from "react"

function AboutMeBlog() {
  const me = "https://d34316robnoe1k.cloudfront.net/meinspain.JPG";

  return (
    <div className="about-me-container">
      <h1> Hi There! </h1>
      <img className={"profile-pic"} src={me} />
      <p> I'm Chris and I'm a Computer Science student at Cal Poly SLO! </p>
      <p>
        I love all things computing, but I'm particularly interested in cloud
        native web / app development and low level nitty-gritty with C /
        Assembly.
      </p>
      <p>
        When I'm away from the computer, I love wrestling around in my Brazilian
        Jiu-Jitsu classes and going on spontaneous trips!
      </p>
    </div>
  );
}

export default AboutMeBlog;