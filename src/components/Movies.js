import {useState} from "react"
// import NewComponent from "./NewComponent";

function Movies({fetchMovies}) {
const [sortMovies, setSortMovies] = useState([...fetchMovies])

    return (
        <div>
        <h1>Explore Our Movies</h1>
        <br></br>
        {sortMovies.map(item => (
            <ul>
            <li className="movie-title" >{item.title}</li>
            <img className="movie-image" src={item.image}></img>
            <br></br>
            <div className="movie-paragraph">
            <li className="movie-preview">{item.preview}</li>
            <br></br>
            <li className="movie-cast" ><b><i>Cast:</i></b> {item.cast}</li>
            <li className="movie-year"><b><i>Year Released:</i></b> {item.year}</li>
            <br></br>
            </div>
            </ul>    
        ))}
        </div>
    )
}

export default Movies


