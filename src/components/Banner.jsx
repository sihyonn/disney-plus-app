import axios from "../api/axios";
import requests from "../api/requests";
import React, { useEffect, useState } from "react";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // 현재 상영중인 영화 정보 가져오기(여러영화)
    const res = await axios.get(requests.fetchNowPlaying);
    // 여러 영화 중 하나의 영화 id 가져오기(랜덤) -> 여기선 데이터 20개 주니까 0~19까지 중 하나 반환
    const selectId = Math.floor(Math.random() * res.data.results.length);
    const movieId = res.data.results[selectId].id;

    //특정 영화의 더 상세한 정보 가져오기(비디오 정보도 포함)
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });
    setMovie(movieDetail);

    console.log(res);
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie.title || movie.name || movie.original_name}
        </h1>
        <div className="banner_buttons">
          {movie?.videos?.results[0]?.key && (
            <button className="banner_button play">Play</button>
          )}
        </div>
        <p className="banner_desc">{movie.overview}</p>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
