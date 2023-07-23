import React from "react";
import { useEffect } from "react";
import { UseFetch } from "./UseFetch";
import "../Styles/Romance.scss";

function Romance() {
  const [data] = UseFetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=804d60aae80546a6edbbbd0a419e5a6b&with_genres=10749"
  );

  useEffect(() => {
    console.log(data[0]);
  });

  return (
    <div id="romance-movies-container">
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

export { Romance };
