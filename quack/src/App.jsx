import Nav from "./Components/Nav";
import About from "./Components/About";
import Community from "./Components/Community";
import './index.css';
import { Route, Routes, Link } from "react-router-dom";

function App() {

  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/about" element={<About></About>}></Route>
        <Route></Route>
        <Route path="/community" element={<Community></Community>}></Route>
      </Routes>
    </>
  )
}

export default App
