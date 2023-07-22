import React from "react"
import {NavLink} from "react-router-dom"

function NavBar({image="https://upload.wikimedia.org/wikipedia/commons/f/fe/Mickey_Mouse_head_and_ears.svg", handleLogin, login}) {
  

    return (
        <nav className="navbar">
            <p onClick={handleLogin} className="login">{login ? "Login" : "Logout"}</p>
            <img class="mouse" src={image} alt="mouse-ears"/>
        <nav>
       
          <NavLink exact to="/" className="nav-links">Home</NavLink>
          
          
          <NavLink to="/movies" className="nav-links">Movies</NavLink>

          
          
          <NavLink to="/mywishlist" className="nav-links">My Wishlist</NavLink>

    
        </nav>
      </nav>
    )
}

export default NavBar