import movieData from "../data/movieData";

function Header({title, about, image="https://static.miraheze.org/greatcharacterswiki/thumb/5/5c/Mouse.png/600px-Mouse.png"}) {
    return (
   <header>
  <h1>{title}</h1>
  <p>{about}</p>
  <img src={image} alt="mickeymouse"/>
   </header>
    )
}

export default Header
