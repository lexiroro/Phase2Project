import React, {useState, useEffect} from "react"
import { Route, Routes } from "react-router-dom";
import movieData from "../data/movieData"
import Header from "../components/Header";
import NavBar from "./NavBar";
import Movies from "./Movies";
import Wishlist from "./Wishlist";


function App() {
const [fetchMovies, setFetchMovies] = useState([])
const [login, setLogin] = useState(true)


function handleLogin(event) {
  setLogin(!login)
}

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
      <NavBar image={image} handleLogin={handleLogin} login={login} />
      <Routes>
      <Route element={ <Movies fetchMovies={fetchMovies} />}path="/movies">
        </Route>
        <Route element= {  <Wishlist fetchMovies={fetchMovies}  />} path="/mywishlist">
        </Route>
        <Route element={<Header title={headerTitle} about={about} image={image}/>} path="/">
        </Route>
        </Routes>
    </div>
  );
}

export default App;


//Tasks to complete: 
//1. POST REQUEST when submitting movies
//2. Movies to display image and title in card
//3. State for submitted
//4. Make sure that on App, Create a Wishlist button lands to myWishlist page
//5. Make sure the NavBar links route to the page