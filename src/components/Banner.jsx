import axios from "../api/axios";
import requests from "../api/requests";
import React, { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(requests.fetchNowPlaying);
    console.log(res);
  };

  return <div>Banner</div>;
};

export default Banner;
