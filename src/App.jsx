import { Routes, Route, Link } from "react-router-dom"
import Red from "./Red"
import Blue from "./Blue"
import Home from "./Home"
import Purple from "./Purple"
import Yellow from "./Yellow"
import './index.css'

function App() {
  return(
   
    <div id="container">
      <div id="navbar" className="bottom-navbar">
        <Link to={"/blue"}>Blue</Link> 
        <Link to={"/red"}>Red</Link>
        <Link to={"/purple"}>Purple</Link> 
        <Link to={"/yellow"}>Yellow</Link>
        <Link to={"/"}>Home</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/purple" element={<Purple />} />
          <Route path="/yellow" element={<Yellow />} />
          <Route path="/" element={<Home />} />
        </Routes>
        </div>
    </div>
   
  )
}

export default App
