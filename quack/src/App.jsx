import { useState } from "react";
import Nav from "./Components/Nav";
import About from "./Components/About";
import './index.css';
import { Route, Routes, Link } from "react-router-dom";

function App() {
  
  const [main, setMain] = useState('');

  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/about" element={<About></About>}></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </>
  )
}

export default App
