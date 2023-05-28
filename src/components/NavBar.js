import React, {useState} from "react"

function NavBar({image="https://upload.wikimedia.org/wikipedia/commons/f/fe/Mickey_Mouse_head_and_ears.svg"}) {
    const [login, setLogin] = useState(true)

    function handleLogin(event) {
      setLogin(!login)
    }

    return (
        <nav className="navbar">
            <p onClick={handleLogin} className="login">{login ? "Login" : "Logout"}</p>
            <img class="mouse" src={image} alt="mouse-ears"/>
        <ul className="nav-links">
          <li>Home</li>
          <li>Movies</li>
          <li>My Wishlist</li>
        </ul>
      </nav>
    )
}

export default NavBar