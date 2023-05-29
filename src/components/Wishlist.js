import movieData from "../data/movieData";
import React, {useState} from "react"

function Wishlist() {


        const [inputValue, setInputValue] = useState('');
      
    
        function handleChange(event) {
          const insertValue = event.target.value;
          setInputValue(insertValue);
          console.log(insertValue)
        }
    
function handleSubmit(event) {
event.preventDefault();
console.log("form submit")
}

    return (
        <div>
        <h1>My Wishlist</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} placeholder="Search a movie" onChange={handleChange} />

        <button type="submit">Add to Wishlist</button>
        </form>
        </div>
    )
        }

    
export default Wishlist;