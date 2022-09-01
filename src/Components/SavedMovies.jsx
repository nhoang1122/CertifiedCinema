import React, { useState, useEffect } from "react";
import { UserAuth } from "../Context/AuthContext";
import { db } from "../FireBase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";

import "../Styles/SavedMovies.css";

const SavedMovies = () => {
  const { user } = UserAuth();

  const [savedMovieRow, setsavedMovieRow] = useState([]);

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setsavedMovieRow(doc.data()?.savedMovies);
    });
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);

  const deleteMovie = async (passedID) => {
    try {
      const result = savedMovieRow.filter((item) => item.id !== passedID);
      await updateDoc(movieRef, {
        savedMovies: result
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {/* <h2 className="title">MY MOVIES</h2>
      <div className="row">
        <div className="slide">
          {movies.map((item, id) => (
            <div key={id} className="movies-map">
              <img
                className="row-img"
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title}
              />
              <div className="overlay">
                <p className="row-img-title">{item?.title}</p>
                <p onClick={() => deleteMovie(item.id)} className="closeout"><AiOutlineClose /></p>   
              </div>
            </div>
          ))}
        </div>
      </div> */}

      <h2 className="title">MY MOVIES</h2>
      <div className="row">
        <div className="slide">
          {/* {movies.map((item,id) => (
                    <Movie key={id} item={item}/>
                ))} */}

          {savedMovieRow.map((item) => (
            <div key={item.id} className="movie-row-map">
              <img
                className="movie-row-img"
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title}
              />
              <div className="movie-row-overlay">
                <p className="movie-row-img-title">{item?.title}</p>
                <p onClick={()=> deleteMovie(item.id)} className='closeout'><AiOutlineClose /></p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default SavedMovies;
