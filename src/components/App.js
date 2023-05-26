import React from "react"
import movieData from "../data/movieData"
import Header from "../components/Header";

function App() {
const movieTitle =movieData.name
const about = movieData.about
const image = console.log(movieData.image)


  return (
    <div className="App">
     <Header title={movieTitle} about={about} image={image}/>
    </div>
  );
}

export default App;
