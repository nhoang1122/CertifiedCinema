import React, { useState } from "react";
import "../Styles/MovieRow.css";

import { FaHeart, FaRegHeart } from "react-icons/fa";

import { UserAuth } from "../Context/AuthContext";
import { db } from "../FireBase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const MovieRow = ({ item }) => {
  const [likeMovie, setLikeMovie] = useState(false);
  const [saved, setSaved] = useState(false);
  
  const { user } = UserAuth();

  const movieID = doc(db, "users", `${user?.email}`);

  const savedMovie = async () => {
    if (user?.email) {
      setLikeMovie(!likeMovie);
      setSaved(true);
      await updateDoc(movieID, {
        savedMovies: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("PLEASE LOG IN TO SAVE A MOVIE");
    }
  };

  return (
    <div className="movie-row-map">
      <img
        className="movie-row-img"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="movie-row-overlay">
        <p className="movie-row-img-title">{item?.title}</p>
        <p onClick={savedMovie}>
          {likeMovie ? (
            <FaHeart className="movie-row-heart" />
          ) : (
            <FaRegHeart className="movie-row-heart" />
          )}
        </p>
      </div>
    </div>
  );
};

export default MovieRow;
