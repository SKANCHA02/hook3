import React, { useState } from "react";
import "./App.css";
import MovieList from "./Components/MovieList";
import { moviesData } from "./data";
import AddMovie from "./Components/AddMovie";
import FilterByName from "./Components/FilterByName";
import FilterByRate from "./Components/Rating";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [inputSearch, setInputSearch] = useState("");
  const [rating, setRating] = useState(0);

  const add = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  return (
    <div className="App">
      <h1>MOVIE APP</h1>
      <AddMovie add={add} />
      <FilterByName inputSearch={inputSearch} setInputSearch={setInputSearch} />
      <FilterByRate rating={rating} setRating={setRating} />
      <MovieList movies={movies} inputSearch={inputSearch} rating={rating} />
    </div>
  );
}

export default App;
