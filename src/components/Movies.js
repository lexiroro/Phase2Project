function Movies({fetchMovies}) {

    const moviePost = fetchMovies.map((title, index) => (
        <ul>
        <li key={index}>{title.title}</li>
        <li key={index}>{title.preview}</li>
        <li key={index}>{title.cast}</li>
        <li key={index}>{title.year}</li>
        <br></br>
        <img key={index} src={title.image}></img>
        </ul>
      ));
    return (
        <div>
        <h1>Movies</h1>
        {moviePost}
        </div>
    )
}

export default Movies