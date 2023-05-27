import React from "react"
// import { Route, Switch } from "react-router-dom";
import movieData from "../data/movieData"
import Header from "../components/Header";
import NavBar from "./NavBar";
import Movies from "./Movies";
import Wishlist from "./Wishlist";


function App() {
const headerTitle = movieData.name
const about = movieData.about
const image = console.log(movieData.image)

const moviePost = movieData.posts.map((title, index) => (
  <ul>
  <li key={index}>{title.title}</li>
  <li key={index}>{title.preview}</li>
  <li key={index}>{title.cast}</li>
  <li key={index}>{title.year}</li>
  <br></br>
  <img key={index} src={title.image}></img>
  </ul>
));


  return (
    <div className="App">
      <NavBar image={image}/>
     
        <Movies moviePost={moviePost} />
     
        <Wishlist />
    
      <Header title={headerTitle} about={about} image={image}/>
   
    </div>
  );
}

export default App;
