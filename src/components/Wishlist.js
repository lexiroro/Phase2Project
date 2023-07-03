import React, { useState } from "react";
import { Autocomplete, TextField, Card } from "@mui/material";
import MovieCard from "./MovieCard";


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

<form onSubmit={handleSubmit} style={{ display: "flex" }}>
<div style={{ flex: 1 }}>      
<Autocomplete disablePortal id="combo-box-demo" options={movieMap} onChange={handleChange}
sx={{ backgroundColor: "white", width: 200, margin: '0 auto', marginLeft: '580px' }}
renderInput={(params) => <TextField {...params} label="Movies" />}
/> 
</div>
        <button className="add" type="submit">
          Add to Wishlist
        </button>
      </form>

    </div>
  );
}

export default Wishlist;
