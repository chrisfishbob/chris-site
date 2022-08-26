import "./about-me.styles.scss";

function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="left">
        <h1 className="title"> Hello</h1>

        <p className="description"> Hello, My name is Chris.</p>
      </div>

      <div className="right">
        <img
          className="picture"
          src="https://d34316robnoe1k.cloudfront.net/meinspain.JPG"
        />
      </div>
    </div>
  );
}

export default AboutMe;
