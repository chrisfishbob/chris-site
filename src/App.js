import Navigation from "./routes/navigation/navigation.component";
import Projects from "./routes/projects/projects.component";
import Pages from "./routes/pages/pages.component";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component"
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
        <Route path="blog" element={<Home/>} />
        <Route path="construction" element={<Construction/>} />

      </Route>
    </Routes>
  );
}

export default App;
