import axios from "../api/axios";
import requests from "../api/requests";
import React, { useEffect, useState } from "react";

import "../style/Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

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
  };

  const truncate = (str, n) => {
    return str?.length < n ? str.substring(0, n) + "..." : str;
  };

  if (isClicked) {
    return <div>clicked</div>;
  } else {
    return (
      <header
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie.title || movie.name || movie.original_name}
          </h1>
          <div className="banner__buttons">
            {movie?.videos?.results[0]?.key && (
              <button
                className="banner__button play"
                onClick={() => setIsClicked(true)}
              >
                Play
              </button>
            )}
          </div>
          <p className="banner__desc">{truncate(movie.overview, 10)}</p>
        </div>
        <div className="banner--fadeBottom" />
      </header>
    );
  }
};

export default Banner;
