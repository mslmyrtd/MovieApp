import React from "react";
const IMG_API = `https://image.tmdb.org/t/p/w1280`;
const MovieCard = () => {
  return (
    <div className="movie">
      <div className="">
        <h3>{title}</h3>
      </div>
      <div className="movie-over">
        <h2>{overview}</h2>
      </div>
    </div>
  );
};

export default MovieCard;
