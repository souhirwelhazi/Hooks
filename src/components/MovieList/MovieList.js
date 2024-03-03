import React, { useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./style.css";

const MovieList = ({filtreadmMovie}) => {
  return(
    <div className="movie-list">
    {filtreadmMovie.map((movie,index)=>{
      return <MovieCard   key={index}  movie={movie}  />;   
  })}
    
  </div>
);
  
};

export default MovieList;