import "./introduction.styles.scss";

function Introduction() {
  return (
    <div className="intro-container">
      <h3 className="hello-world"> Hello, World.</h3>
      <h1 className="my-name"> I'm Chris!</h1>
      <h2 className="title-description"> Software Engineer && CS Student</h2>
      {/* <div className="main_div">
        <button>GitHub</button>
      </div> */}
      <div className="links-container">
        <a href="https://github.com">Github</a>
        <a href="https://linkedin.com"> LinkedIn</a>
        <a href="https://google.com">Resume</a>

      </div>
      {/* <div className="more-description-container">
        <h2>
          {" "}
          I am a computer science major at Cal Poly San Luis Obispo. 
        </h2>
      </div> */}
    </div>
  );
}

export default Introduction;
