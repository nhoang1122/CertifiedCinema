import React, { useState, useEffect } from "react";

import "../Styles/Row.css";

import axios from "axios";

import MovieRow from "./MovieRow";

const Row = ({ title, fetchURL }) => {
  const [movieRow, setMovieRow] = useState([]);

  

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      console.log("RES DATA USEEFFECT : ",res.data.results)

      // let displayedFunction = (movies) => {

      //   let displayedMovies = [];

      //   for (let i = 0; i < movies.length; i++) {
      //     if(movies[i].popularity > 200) {
      //       displayedMovies.push(movies[i])
      //     }
      //   }
      //   return displayedMovies;
      // }

      // setMovieRow(displayedFunction(res.data.results));

      setMovieRow(res.data.results);
    });
  }, [fetchURL]);

  console.log("MOVIE ROW : ", movieRow);

  return (
    <div>
      <h2 className="title">{title}</h2>
      <div className="row">
        <div className="slide">
          {/* {movies.map((item,id) => (
                    <Movie key={id} item={item}/>
                ))} */}

          {movieRow.map((item, id) => (

            <MovieRow key={id} item={item}/>

          ))}
        </div>
      </div>
    </div>
  );
};

export default Row;
