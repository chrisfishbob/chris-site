import Navigation from "./routes/navigation/navigation.component";
import Projects from "./routes/projects/projects.component";
import { Routes, Route } from "react-router-dom";
import MyStory from "./routes/my-story/blog-page/blog-page.component";
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
        <Route index element={<MyStory/>} />
        <Route path="projects" element={<Projects/>} />
      </Route>
    </Routes>
  );
}

export default App;
