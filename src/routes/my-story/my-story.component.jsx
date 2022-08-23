import "./my-story.styles.scss";

function MyStory() {
  const obama =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/1200px-President_Barack_Obama.jpg";

  const poly =
    "https://gradbusiness.calpoly.edu/wp-content/uploads/2020/11/20200113-CPAerials-SP0062.jpg";
  
  const usa = "http://myattorneyusa.com/storage/upload/images/citizenship-nationality.jpg"

  return (
    <div>
      <div className="row">
        <div className="left-column" id="l">
          <div className="event">
            <h1> One Of U.S.! </h1>
            <h4> April, 2022</h4>
            <img className="poly-img" src={usa}/>
            <p> After eight years of living in California, I became a
            naturalized U.S. citizen!</p>
          </div>

          <div className="event">
            <h1> Birth </h1>
            <h3> Cal Poly San Luis Obispo</h3>
            <img className="poly-img" src={poly}/>
          </div>
        </div>
        <div className="right-column" id="r">
          <div className="event">
            <h1> About Me </h1>
            <img className="poly-img" src={obama}/>
            <p> Hi There!</p>
          </div>
          <div className="links">
            <h1> Links </h1>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default MyStory;
