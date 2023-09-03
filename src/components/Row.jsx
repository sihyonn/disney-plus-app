import React, { useCallback, useEffect, useState } from "react";
import axios from "../api/axios";
import "../style/Row.css";
import MovieModal from "./MovieModal";

const Row = ({ title, id, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});

  const fetchMovieData = useCallback(async () => {
    const res = await axios.get(fetchUrl);
    console.log("res", res);
    setMovies(res.data.results);
  }, [fetchUrl]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  };

  return (
    <div>
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft -= window.innerWidth - 80;
            }}
          >
            {"<"}
          </span>
        </div>
        <div>
          {movies.map((movie) => {
            console.log(
              `Image URL for ${movie.name}: https://image.tmdb.org/t/p/original${movie.backdrop_path}`
            );
            return (
              <img
                key={movie.id}
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.name}
                onClick={() => handleClick(movie)}
              />
            );
          })}
        </div>
        <div className="slider__arrow-right">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft += window.innerWidth - 80;
            }}
          >
            {">"}
          </span>
        </div>
      </div>
      {modalOpen && (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
      )}
    </div>
  );
};

export default Row;
