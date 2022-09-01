import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/Main.css";

import requests from "../Request";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((res) => {
      setMovies(res.data.results);
    });
  }, []);
  console.log("RANDOM MOVIE : ", movie);

  const truncateStr = (str, num) => {
    if(str?.length > num) {
      return str.slice(0,num) + '...';
    } else {
      return str;
    }
  }

  return (
    <div className="main">
      <div className="section">
        <div className="gradient"></div>
        <img
          className="backdrop"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="info">
          <h1 className="movie-title">{movie?.title}</h1>
          <div>
            <button className="backdrop-btn">PLAY</button>
            <button className="backdrop-btn">WATCH LATER</button>
          </div>
          <p className="released">RELEASED : {movie?.release_date}</p>
          <p className="overview">{truncateStr(movie?.overview,150)}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;