import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Projects from "./routes/projects/projects.component";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

function Contact() {
  return <h1> (949)-445-2477</h1>;
}

function SiteInfo() {
  return <h1>This site was made with React JS </h1>;
}

function MyStory() {
  const imageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/1200px-President_Barack_Obama.jpg";
  return (
    <div>
      <img src={imageUrl} className="profile-pic" />
      <div className="profile-text">
        <h1>Hello There!</h1>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* Render the element if the path matches*/}
      <Route path="/" element={<Navigation />}>
        <Route index element={<Projects />} />
        <Route path="contact" element={<Contact></Contact>} />
        <Route path="info" element={<SiteInfo></SiteInfo>} />
      </Route>
    </Routes>
  );
}

export default App;
