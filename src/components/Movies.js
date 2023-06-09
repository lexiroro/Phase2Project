function Movies({fetchMovies}) {

    const moviePost = fetchMovies.map((title, index) => (
        <ul>
        <li className="movie-title" key={index}>{title.title}</li>
        <img className="movie-image" key={index} src={title.image}></img>
        <br></br>
        <div className="movie-paragraph">
        <li className="movie-preview" key={index}>{title.preview}</li>
        <br></br>
        <li className="movie-cast" key={index}><u>Cast:</u> {title.cast}</li>
        <li className="movie-year" key={index}><u>Year Released:</u> {title.year}</li>
        <br></br>
        </div>
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