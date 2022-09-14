import "./education.styles.scss";
import { useEffect } from "react"

function Education() {
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, [])

  return (
    <div className="timeline">
      <div className="container left">
        <div className="content-odd">
          <h2>Fall 2022</h2>
          <p>CSC-430: Programming Languages</p>
          <p>CSC-466: Knowledge Discovery from Data</p>
          <p>CSC-307: Software Engineering</p>
        </div>
      </div>

      <div className="container right">
        <div className="content-even">
          <h2>Spring 2022</h2>
          <p>CSC-349 Design & Analysis of Algorithms</p>
          <p>STAT-312 Stat Methods for Engineers</p>
          <p>KINE-109 Bowling</p>
          <p>BOT-121 General Botany</p>
        </div>
      </div>

      <div className="container left">
        <div className="content-odd">
          <h2>Winter 2022</h2>
          <p>CPE-315 Computer Architecture</p>
          <p>PHYS-132 General Physics II</p>
          <p>ANT-250 Biological Anthropology</p>
        </div>
      </div>

      <div className="container right">
        <div className="content-even">
          <h2>Fall 2021</h2>
          <p>CPE-357 Systems Programming</p>
          <p>CSC-248 Discrete Structure</p>
          <p>MATH-241 Multivariable Calculus</p>
        </div>
      </div>

      <div className="container left">
        <div className="content-odd">
          <h2>Spring 2021</h2>
          <p>CPE-203 Object-Oriented Programming and Design</p>
          <p>CSC-225 Intro to Computer Organization</p>
          <p>HIST-206 American Cultures</p>
          <p>MATH-206 Linear Algebra I</p>
        </div>
      </div>

      <div className="container right">
        <div className="content-even">
          <h2>Winter 2021</h2>
          <p>CPE-202 Data Structures</p>
          <p>ENGL-149 Technical Writing for Engineers</p>
          <p>PHYS-141 General Physica 1A</p>
          <p>MATH-143 Calculus III</p>
        </div>
      </div>

      <div className="container left">
        <div className="content-odd">
          <h2>Spring 2021</h2>
          <p>CPE-101 Fundamentals of Computer Science</p>
          <p>CPE-123 Introduction to Computing: Security</p>
          <p>MATH-142 Calculus II</p>
          <p>TH-210 Introduction to Theatre</p>
        </div>
      </div>

      <div className="container right">
        <div className="content-even">
          <h2>Summer 2020 (Quarter Plus)</h2>
          <p>COMS-101 Public Speaking</p>
          <p>ES-102 Race, Culture, Poliics in the U.S.</p>
        </div>
      </div>

      <div className="container left">
        <div className="content-odd">
          <h2>AP Credits 2020</h2>
          <p>AP Calculus AB</p>
          <p>AP Psychology</p>
          <p>AP Microeconomics</p>
          <p>AP English Literature and Composition</p>
          <p>AP Art History</p>
        </div>
      </div>

      <div className="container right">
        <div className="content-even">
          <h2>AP Credits 2019</h2>
          <p>AP Biology</p>
          <p>AP English Language and Composition</p>
          <p>AP U.S. History</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
