import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";

function Shop() {
  return <h1>Sample website!</h1>;
}

function App() {
  return (
    <Routes>
      {/* Render the element if the path matches*/}
      <Route path="/" element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path="shop" element={<Shop></Shop>} />
      </Route>
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
}

export default App;
