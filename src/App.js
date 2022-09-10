import Navigation from "./routes/navigation/navigation.component";
import Projects from "./routes/projects/projects.component";
import Pages from "./routes/pages/pages.component";
import { Routes, Route } from "react-router-dom";
import Blog from "./routes/blog/blog.component"
import Education from "./routes/education/education.component";
import WorkExperience from "./routes/work-experience/work-experience.component";
import "./App.scss";


function Construction() {
  return <h1> This page is under construction, check back later!</h1>;
}

function SiteInfo() {
  return <h1>This site was made with React JS </h1>;
}


function App() {
  return (
    <Routes>
      {/* Render the element if the path matches*/}
      <Route path="/" element={<Navigation />}>
        <Route index element={<Pages/>} />
        <Route path="projects" element={<Projects/>} />
        <Route path="blog" element={<Blog/>} />
        <Route path="education" element={<Education/>} />
        <Route path="construction" element={<WorkExperience/>} />

      </Route>
    </Routes>
  );
}

export default App;
