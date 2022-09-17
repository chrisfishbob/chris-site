import "./work-experience.styles.scss";
import { useEffect } from "react";
import WorkExperienceIntro from "../../components/work-experience-intro/work-experience-intro.component";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

function WorkExperience() {
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div>
      <WorkExperienceIntro />
      <div className="work-timeline">
        

        <AnimationOnScroll
          animateIn="animate__backInLeft"
          animateOut="animate__fadeOut"
          offset={100}
          duration={1}
        >
        <div className="container left">
          <div className="content-deloitte">
            <h1>Deloitte</h1>
            <h3>Software Engineering Intern</h3>
            <p> June 10 - August 26, 2022</p>
            <p>
              • Developed a cloud analytics application that compiles and charts historical trends and current statuses from external APIs. 
            </p>
            <p>
              • Responsible for 7000+ lines of new code and 30+ merged pull requests in the official project repository. 
            </p>
            <p>
              • Integrated remote version control for multiple contributors with
              multiple branches through Git and GitHub.
            </p>
            <p>
              • Designed and deployed responsive UI/UX elements using wireframes, react hooks, CSS and JavaScript libraries. 
            </p>
          </div>
        </div>
        </AnimationOnScroll>

        <AnimationOnScroll
          animateIn="animate__backInRight"
          animateOut="animate__fadeOut"
          offset={100}
          duration={1}
        >
        <div className="container right">
          <div className="content-calpoly">
            <h1>Cal Poly</h1>
            <h3>Systems Programming TA</h3>
            <p> December - June 15, 2022</p>
            <p>
              • Selected as the teaching assistant out of 70+ students in 2021 through class performance. 
            </p>
            <p>
              • Reduced overall grading duration by 10-20% through developing a&nbsp;
              <a href="https://github.com/chrisfishbob/gomaker" target="_blank">
                concurrent compiler tool.
              </a>
            </p>
            <p>
              • Led lab sections of 35+ students by introducing large programming projects and critical coding techniques in C and C++. 
            </p>
            <p>
              • Reviewed lecture content and offered debugging help to all students in the course during weekly office hours. 
            </p>
            <p>
              • Graded all projects and provided individual style/correctness feedback, using a mix of automation and manual review. 
            </p>
          </div>
        </div>
        </AnimationOnScroll>

        <AnimationOnScroll
          animateIn="animate__backInLeft"
          animateOut="animate__fadeOut"
          offset={100}
          duration={1}
        >
        <div className="container left">
          <div className="content-gdc">
            <h1>Game Design Club</h1>
            <h3>Software Engineer</h3>
            <p> September 2019 - March, 2020</p>
            <p>
              • Developed character movement, weapons, enemy AI, and more using
              C# and Unity Engine 5.
            </p>
            <p>
              • Collaborated with other programmers in a shared GitHub
              repository.
            </p>
            <p>
              • Communicated between the sound and design teams to ensure proper
              deadlines are met.
            </p>
          </div>
        </div>
        </AnimationOnScroll>

        <AnimationOnScroll
          animateIn="animate__backInRight"
          animateOut="animate__fadeOut"
          offset={100}
          duration={1}
        >
        <div className="container right">
          <div className="content-freelance">
            <h1>Freelance</h1>
            <h3>iOS Developer</h3>
            <p> January 2019 - May 2020</p>
            <p>
              • Created and published{" "}
              <a
                href="https://apps.apple.com/zw/app/radical-radish/id1488590413"
                target="_blank"
              >
                {" "}
                Radical Radish{" "}
              </a>
              , a 2D endless runner game, to the App Store.
            </p>
            <p>
              • Obtained Unity Engine programming skills through Udemy. Then
              developed and Deployed{" "}
              <a
                href="https://apps.apple.com/ca/app/argon-assault/id1485174797"
                target="_blank"
              >
                {" "}
                Argon Assault{" "}
              </a>
              , a retro 3D space shooter game, to the App Store.
            </p>
          </div>
        </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
}

export default WorkExperience;
