import Nav from "./Nav/Nav";
import About from "./About/About";
import Community from "./Community/Community";
import './index.css';
import { Route, Routes, Link } from "react-router-dom";
import MainPage from "./Main/MainPage";

function App() {

  return (
    <>
      <Nav></Nav>




      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route></Route>
        <Route path="/community" element={<Community></Community>}></Route>
      </Routes>
    </>
  )
}

export default App
