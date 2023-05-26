import movieData from "../data/movieData";

function NavBar({image="https://upload.wikimedia.org/wikipedia/commons/f/fe/Mickey_Mouse_head_and_ears.svg"}) {
    return (
        <nav className="navbar">
            <p className="login">Login</p>
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