import "./my-story.styles.scss";

function MyStory() {
  const imageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/1200px-President_Barack_Obama.jpg";
  
  const poly = "https://gradbusiness.calpoly.edu/wp-content/uploads/2020/11/20200113-CPAerials-SP0062.jpg"

  return (
    <div>
      <div className="row">
        <div className="left-column"></div>
        <div className="event">
          <h1> School </h1>
          <h3> Cal Poly San Luis Obispo</h3>

        </div>
        <div className="event">
          <h1> Birth </h1>
        </div>
        <div className="right-column">
          <div className="event">
            <h1> About Me </h1>
          </div>
          <div className="event">
            <h1> Links </h1>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default MyStory;
