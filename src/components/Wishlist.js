import React, {useState} from "react"
import {Autocomplete, TextField, Card, CardMedia} from '@mui/material'; 



function Wishlist({fetchMovies, login}) {
 const {id} = fetchMovies

const [inputValue, setInputValue] = useState(''); //used initially for handleChange(). Initial state is the blank space. setInput value is the value that you type in

const [wishList, setWishList] = useState([]) //wishList is the space used to display your created wishlist. Initial state is an empty array and setWishlist is the value where changes are made to where there is values inside the empty array


const addMovies = (newMovie) => {
const movie = fetchMovies.find((movie) => movie.title === newMovie);
if (movie) {
  const yourmovie = {
    id: Date.now(),
    title: movie.title,
    image: movie.image,
  };
  setWishList([...wishList, yourmovie]);
}
}


function handleChange(event) {
const newValue = (event.target.innerHTML)
setInputValue(newValue);
} //this function handleChange takes in the parameter of an event. We create a variable insertValue to equal event.target.value which is what you type in. Then setInputValue takes the argument of insertValue tracking the updated changes
    
function handleSubmit(event) {
event.preventDefault();
fetch("http://localhost:3000/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(addMovies(inputValue)),
})
setInputValue('')
} //this function handleSubmit takes in the parameter of an event. We state event.preventDefault() so that you dont have to refresh. we use the callback addMovies taking the argument of inputValue which represents the parameter newMovie in the callback because when you add in a new movie (inputvalue) then we have setInputValue update the state which is a value of a string


const handleDelete = (movieId) => {
    const updatedList = wishList.filter((movie) => movie.id !== movieId);
    setWishList(updatedList);
  };


//  function deleteMovie(){
//   fetch(`http://localhost:3000/posts/${id}`, {
//     method: "DELETE",
//  })
//  handleDelete(id)
// } 

const movieMap = fetchMovies.map(movie => (movie.title))
    return (
        <div>
        <h1>My Wishlist</h1>
        <div className="wishlist-container">
        <Card sx={{ textAlign: "center", backgroundColor: "white", width: 600, margin: '0 auto' }} variant="outlined">
        {login ? "Please login to view your wishlist" : null}
    {wishList.map((movie, index) => (
    <Card key={index} className="wishlist-card">
      <p>{movie.title}
      <button className="delete" 
      onClick={() => handleDelete(movie.id)}>X</button>
      </p>
       <CardMedia
         component="img"
         alt={movie.title}
         height="50"
         image={movie.image}
         style={{ display: "block", margin: "0 auto" }}
       />
    </Card>
   
  ))}
</Card>
</div>

        <h1>Create Your Wishlist</h1>
    
        <form onSubmit={handleSubmit}>
        <Autocomplete
disablePortal
id="combo-box-demo"
options={movieMap}
value={inputValue}
onChange={handleChange}
sx={{ backgroundColor: "white", width: 200, margin: '0 auto' }}
renderInput={(params) => <TextField {...params}  />}
/> 

        <button className="add" type="submit">Add to Wishlist</button>
        </form>
        </div>
    )
        }

export default Wishlist;
