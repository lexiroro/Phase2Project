import movieData from "../data/movieData";

function NavBar() {
    return (
        <nav className="navbar">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">Movies</a></li>
          <li><a href="/contact">My Wishlist</a></li>
        </ul>
      </nav>
    )
}

export default NavBar