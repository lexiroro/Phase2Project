import movieData from "../data/movieData";
import React, {useState} from "react"

function Wishlist() {
const [inputValue, setInputValue] = useState('');
const [wishList, setWishList] = useState([])
      
    
function handleChange(event) {
const insertValue = event.target.value;
setInputValue(insertValue);
console.log(insertValue)
}
    
function handleSubmit(event) {
event.preventDefault();
addMovies(inputValue)
setInputValue('')
}

const addMovies = (newmovie) => {
setWishList([...wishList, newmovie])
}

    return (
        <div>
        <h1>My Wishlist</h1>
        <section>{wishList.map((movie, index) => (
            <p key={index}>{movie}</p>
        ))}</section>
        <h1>Create Your Wishlist</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} placeholder="Search a movie" onChange={handleChange} />

        <button type="submit">Add to Wishlist</button>
        </form>
        </div>
    )
        }

    
export default Wishlist;