import movieData from "../data/movieData";

function NavBar() {
    return (
        <nav className="navbar">
        <ul className="nav-links">
          <li>Home</li>
          <li>Movies</li>
          <li>My Wishlist</li>
        </ul>
      </nav>
    )
}

export default NavBar