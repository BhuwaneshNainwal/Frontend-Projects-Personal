import React from "react";
import { useEffect } from "react";
import { UseFetch } from "./UseFetch";
import "../Styles/Comedy.scss";

function Comedy() {
  const [data] = UseFetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=804d60aae80546a6edbbbd0a419e5a6b&with_genres=35"
  );

  return (
    <div id="comedy-movies-container">
      {data &&
        data.map((item, index) => {
          return (
            <div className="movie">
              <p>{item.title}</p>
              <img
                src={"https://image.tmdb.org/t/p/original/" + item.poster_path}
              />
              <p>Released on : {item.release_date}</p>
            </div>
          );
        })}
    </div>
  );
}

export { Comedy };
