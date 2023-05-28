import movieData from "../data/movieData";
import React, {useState} from "react"

function Wishlist() {

    const Dropdown = () => {
        const [inputValue, setInputValue] = useState('');
        const [filteredSuggestions, setFilteredSuggestions] = useState([])
    
        function handleChange(event) {
          const insertValue = event.target.value;
          setInputValue(insertValue);
          
    
          const filtered = movieData.filter((item) => 
          item.toLowerCase().includes(insertValue.toLowerCase())
          );
          setFilteredSuggestions(filtered)
      
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
        <ul>
        {filteredSuggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
        ))}
        </ul>
        <button type="submit">Add to Wishlist</button>
        </form>
        </div>
    )
        }

    }
export default Wishlist;