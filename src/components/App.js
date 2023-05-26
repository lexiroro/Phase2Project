import React from "react"
import movieData from "../data/movieData"
import Header from "../components/Header";
import NavBar from "./NavBar";
function App() {
const movieTitle = movieData.name
const about = movieData.about
const image = console.log(movieData.image)


  return (
    <div className="App">
      <NavBar />
     <Header title={movieTitle} about={about} image={image}/>
    </div>
  );
}

export default App;
