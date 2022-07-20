import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";

function Contact() {
  return <h1> (949)-445-2477</h1>;
}

function App() {
  return (
    <Routes>
      {/* Render the element if the path matches*/}
      <Route path="/" element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path="contact" element={<Contact></Contact>} />
      </Route>
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
