import React from 'react'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  
  const navigate = useNavigate();
  
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">DeltaX</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <button className="btn" onClick={()=> navigate("/")} >Home</button>
      </li>
      <li className="nav-item">
        <button className="btn" onClick={()=> navigate("/add")} >Add Song / Artist</button>
      </li>
    </ul>
  </div>
</nav>

{/* <footer>
<div className="footer-copyright text-center py-3">For DeltaX by
    <a href="https://www.linkedin.com/in/roohit-gupta/"> Rohit Gupta</a>
  </div>
 

</footer> */}

    </div>
  )
}

export default Navbar
