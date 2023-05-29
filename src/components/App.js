import React, {useState, useEffect} from "react"
// import { Route, Switch } from "react-router-dom";
import movieData from "../data/movieData"
import Header from "../components/Header";
import NavBar from "./NavBar";
import Movies from "./Movies";
import Wishlist from "./Wishlist";


function App() {
const [fetchMovies, setFetchMovies] = useState([])

useEffect(() => {
    fetch('http://localhost:3000/posts')
    .then((res) => (res.json())
    .then (data => setFetchMovies(data))
  )}, []);

const headerTitle = movieData.name
const about = movieData.about
const image = console.log(movieData.image)


console.log(fetchMovies)


  return (
    <div className="App">
      <NavBar image={image} />
     
        <Movies fetchMovies={fetchMovies} />
     
        <Wishlist />
    
      <Header title={headerTitle} about={about} image={image}/>
   
    </div>
  );
}

export default App;
