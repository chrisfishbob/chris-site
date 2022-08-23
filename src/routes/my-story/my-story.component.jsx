import "./my-story.styles.scss";

function MyStory() {
  const obama =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/1200px-President_Barack_Obama.jpg";

  const poly =
    "https://gradbusiness.calpoly.edu/wp-content/uploads/2020/11/20200113-CPAerials-SP0062.jpg";

  const usa =
    "http://myattorneyusa.com/storage/upload/images/citizenship-nationality.jpg";

  
  const deloitte_boat = "https://racoongrilledcheesecopy.s3.amazonaws.com/deloitte_boat.png"

  return (
    <div>
      <div className="row">
        <div className="left-column" id="l">

          <div className="event">
            <h1> Chris's Consulting Chronicles </h1>
            <h3> June - August, 2022</h3>
            <img className="poly-img" src={deloitte_boat} />
            <p> I had the great oppurtunity to work as a Software Engineer
            this summer at Deloitte!</p>
          </div>

          <div className="event">
            <h1> One Of U.S.! </h1>
            <h3> April, 2022</h3>
            <img className="poly-img" src={usa} />
            <p>
              After many years of living in California, I became a naturalized
              U.S. citizen!
            </p>
            <p>
              It hasn't always been easy, moving from Taiwan to a California suburb
              where everyone spoke a different language. Eventually, one day I woke
              up and realized that my inner-dialogue is English. Maybe there is
              a value to binging YouTube videos after all.
            </p>
          </div>

        </div>



        <div className="right-column" id="r">
          <div className="event">
            <h1> Hi There! </h1>
            <img className="poly-img" src={obama} />
            <p> I'm Chris and I'm a Computer Science student at Cal Poly SLO! </p>
            <p> I love all things computing, but I'm particularly interested
            in cloud native web / app development and low level nitty-gritty with
            C / Assembly. </p>
            <p> When I'm away from the computer, I love wrestling around in
            my Brazilian Jiu-Jitsu classes and going on spontaneous trips!</p>
          </div>
          <div className="links">
            <h1> Let's Connect! </h1>
            <a href="tel:+9494452477" target="_blank"> 949-445-2477 </a>
            <br/>
            <br/>
            <a href="mailto: iamchrishsu@gmail.com" target="_blank"> iamchrishsu@gmail.com </a>
            <br/>
            <br/>
            <a href="https://linkedin.com/in/hsuc/" target="_blank"> LinkedIn </a>
            <br/>
            <br/>
            <a href="https://github.com/chrisfishbob" target="_blank"> GitHub </a>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default MyStory;
