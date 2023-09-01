import React, { useCallback, useEffect, useState } from "react";
import axios from "../api/axios";

const Row = ({ title, id, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  const fetchMovieData = useCallback(async () => {
    const res = await axios.get(fetchUrl);
    console.log("res", res);
    setMovies(res.data.results);
  }, [fetchUrl]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  const handleClick = () => {};

  return (
    <div>
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-l">
          <span className="arrow">{"<"}</span>
        </div>
        <div>
          {movies.map((movie) => {
            <img
              key={movie.id}
              className="row___poster"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.name}
              onClick={() => handleClick(movie)}
            />;
          })}
        </div>
        <div className="slider__arrow-r">
          <span className="arrow">{">"}</span>
        </div>
      </div>
    </div>
  );
};

export default Row;
