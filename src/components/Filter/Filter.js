import React, { useState } from "react";
import MovieList from '../MovieList/MovieList';

const Filter = ({ratingChange,searchInput,movieData}) => {
  var filtreadmMovie = movieData.filter(
   
    (movie,index) =>
    movie.title.toLowerCase().includes(searchInput.toLowerCase()) && movie.Rating >= ratingChange
    
    ) ;
  return (
    <div>

   <MovieList filtreadmMovie={filtreadmMovie}/>
   
    </div>
  );
};

export default Filter;