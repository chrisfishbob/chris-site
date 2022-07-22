import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Projects from "./routes/projects/projects.component";
import { Routes, Route } from "react-router-dom";

function Contact() {
  return <h1> (949)-445-2477</h1>;
}

function SiteInfo() {
  return (
    <h1>This site was made with React JS </h1>
  )
}

function App() {
  return (
    <Routes>
      {/* Render the element if the path matches*/}
      <Route path="/" element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path="contact" element={<Contact></Contact>} />
          <Route path="info" element={<SiteInfo></SiteInfo>} />
          <Route path="education" element={Contact}/>
          <Route path="my-story" element={Contact}/>
          <Route path="work-experience" element={Contact}/>
          <Route path="technical-skills" element={Contact}/>
          <Route path="projects" element={<Projects></Projects>}/>
      </Route>
    </Routes>
  );
}

export default App;
