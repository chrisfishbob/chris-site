import Navigation from "./routes/navigation/navigation.component";
import Projects from "./routes/projects/projects.component";
import Pages from "./routes/pages/pages.component";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component"
import "./App.scss";

function Contact() {
  return <h1> (949)-445-2477</h1>;
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
        <Route path="blog" element={<Home/>} />

      </Route>
    </Routes>
  );
}

export default App;
