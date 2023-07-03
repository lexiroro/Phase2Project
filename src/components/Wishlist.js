import React, { useState } from "react";
import MovieCard from "./MovieCard";
import MovieForm from "./MovieForm"


function Wishlist({ fetchMovies, login }) {

  const [inputValue, setInputValue] = useState(""); 
  const [wishList, setWishList] = useState([]); 

  function handleChange(event) {
    const newValue = event.target.textContent;
    setInputValue(newValue);
  } 

  function handleSubmit(event) {
    event.preventDefault();
    const movie = fetchMovies.find((movie) => movie.title === inputValue);
    if (movie) {
      const newMovie = {
        title: movie.title,
        image: movie.image,
      };
      fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMovie),
      })
        .then((response) => response.json())
        .then((data) => {
          setWishList([...wishList, data]);
         
        });
         setInputValue("");
    }
  }

  function deleteMovie(movieId) {
    const updatedList = wishList.filter((movie) => movie.id !== movieId);
    fetch(`http://localhost:3000/posts/${movieId}`, {
      method: "DELETE",
    }).then(() => {
      setWishList(updatedList);
    });
  }

  const movieMap = fetchMovies.map(movie => movie.title)

  return (
    <div>
       <h1>My Wishlist</h1>
     
      <p className="login-message">{login ? "Please login to view your wishlist" : null}</p>
          {wishList.map((movie, index) => ( 
            <MovieCard key={index} deleteMovie ={deleteMovie} movie={movie} login={login}/>
            ))} 
          
<h1>Create Your Wishlist</h1>
<MovieForm handleSubmit={handleSubmit} handleChange={handleChange} movieMap={movieMap} />
    </div>
  );
}

export default Wishlist;
