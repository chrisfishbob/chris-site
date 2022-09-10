import "./work-experience.styles.scss";

function WorkExperience() {
  return (
    <div className="work-timeline">
      <div className="container left">
        <div className="content-deloitte">
          <h1>Deloitte</h1>
          <h3>Software Engineering Intern</h3>
          <p> June 10 - August 26, 2022</p>
          <p>
            • Developed a cloud native analytics application for a Fortune 500
            client with ReactJS.
          </p>
          <p>
            • Responsible for 5000+ lines of new code and 25+ merged pull
            requests on the official project repository.
          </p>
          <p>
            • Integrated remote version control for multiple contributors with
            multiple branches through Git and GitHub.
          </p>
          <p>
            • Designed and deployed front end UX/UI elements using wireframes,
            CSS, and JavaScript libraries.
          </p>
        </div>
      </div>

      <div className="container right">
        <div className="content-calpoly">
          <h1>Cal Poly</h1>
          <h3>Systems Programming TA</h3>
          <p> December - June 15, 2022</p>
          <p>
            • 2 out of 70+ students chosen to be a teaching assistant in 2021
            through class performance
          </p>
          <p>
            • Developed custom CLI tools that reduced overall grading times by
            10-20%.
          </p>
          <p>
            • Led lab sections of 40 students by introducing and assisting in
            large programming projects.
          </p>
          <p>
            • Held office hours by explaining core systems programming concepts
            along with debugging help with assignments.
          </p>
          <p>
            • Graded all projects and provided individual feedback regarding
            style / correctness, using automation and manual review.
          </p>
        </div>
      </div>

      <div className="container left">
        <div className="content-gdc">
          <h1>Game Design Club</h1>
          <h3>Software Engineer</h3>
          <p> September 2019 - March, 2020</p>
          <p>
            • Developed character movement, weapons, enemy AI, and more using C# and Unity Engine 5. 
          </p>
          <p>
            • Collaborated with other programmers in a shared GitHub repository. 
          </p>
          <p>
            • Communicated between the sound and design teams to ensure proper deadlines are met. 
          </p>
        </div>
      </div>

      <div className="container right">
        <div className="content-freelance">
          <h1>Freelance</h1>
          <h3>iOS Developer</h3>
          <p> January 2019 - May 2020</p>
          <p>
            • Created and published <a href="https://apps.apple.com/zw/app/radical-radish/id1488590413" target="_blank"> "Radical Radish" </a>, a 2D endless runner game,
            to the App Store.
          </p>
          <p>
            • Obtained Unity Engine programming skills through Udemy. Then
            developed and Deployed <a href="https://apps.apple.com/ca/app/argon-assault/id1485174797" target="_blank"> "Argon Assault" </a>, a retro 3D space shooter
            game, to the App Store.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
