function Movies({fetchMovies}) {

    const moviePost = fetchMovies.map((title, index) => (
        <ul>
        <li className="movie-title" key={index}>{title.title}</li>
        <img className="movie-image" key={index} src={title.image}></img>
        <br></br>
        <li className="movie-preview" key={index}>{title.preview}</li>
        <br></br>
        <li className="movie-cast" key={index}>Cast: {title.cast}</li>
        <li className="movie-year" key={index}>Year Released: {title.year}</li>
        <br></br>
        </ul>
      ));
    return (
        <div>
        <h1>Explore Our Movies</h1>
        <br></br>
        {moviePost}
        </div>
    )
}

export default Movies