import React from "react";
import { useParams } from "react-router-dom";
import "./style.css";
const MovieDetails = ({movieData}) => {
const { movieId}=useParams();

const findMovie = movieData.find((movie,index) => movie.id ==movieId);


return (
  <div>
      <h1>{findMovie.title}</h1>
      <div className="movie-details">
          <img src={findMovie.posterUrl} alt="Affiche du film" />
          <div className="description">
              <p>{findMovie.description}</p>
              <p className="movie-rating">Rating : {findMovie.Rating}</p>
          </div>
      </div>
      <iframe
          style={{ width: "100%", height: "400px" }}
          src={findMovie.trailer}
          title="Lecteur vidéo YouTube"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
      ></iframe>
  </div>
)


}

export default MovieDetails;