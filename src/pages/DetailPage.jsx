import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const [movie, setMovie] = useState({});

  // let movieId = useParams().movieId와 동일
  let { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/movie/${movieId}`);
      console.log(response);
      setMovie(response.data);
    }
    fetchData();
  }, [movieId]);

  if (!movie) return null;

  return (
    <section>
      <img
        className="modal__poster-img"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="movie_img"
      />
    </section>
  );
};

export default DetailPage;
