import React from "react";
import { TMDB_IMG_URL } from "../utils/constants";

const MovieCard = ({ key, posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img src={TMDB_IMG_URL + posterPath} alt="movie poster" />
    </div>
  );
};

export default MovieCard;
