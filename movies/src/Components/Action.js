import React, { useState } from "react";
import { useEffect } from "react";
import { UseFetch } from "./UseFetch";
import "../Styles/Action.scss";
import * as ReactBootStrap from "react-bootstrap";

function Action({}) {
  const [searchActionMovie, setSearchActionMovie] = useState("");
  const [searchDebounceActionMovie, setSearchDebounceActionMovie] =
    useState("");

  const [isLoading, setIsLoading] = useState(true);

  const [data] = UseFetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=804d60aae80546a6edbbbd0a419e5a6b&with_genres=28"
  );

  useEffect(() => {
    if (data.length > 0) {
      setIsLoading(false);
    }
  }, [data]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearchDebounceActionMovie(searchActionMovie);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchActionMovie]);

  function searchOnChangeHandler(event) {
    event.preventDefault();
    setSearchActionMovie(event.target.value);
    console.log(event.target.value);
  }
  return (
    <>
      {isLoading ? (
        <div id="loader-container">
          <ReactBootStrap.Spinner animation="border" />
        </div>
      ) : (
        <>
          <div id="search-container">
            <input
              type="text"
              placeholder="Enter an action movie to search"
              onChange={searchOnChangeHandler}
            ></input>
          </div>
          <div id="action-movies-container">
            {data &&
              data
                .filter((item, index) => {
                  return (
                    searchDebounceActionMovie.length === 0 ||
                    item.original_title
                      .toLowerCase()
                      .startsWith(searchDebounceActionMovie.toLowerCase())
                  );
                })
                .map((item, index) => {
                  return (
                    <div className="movie">
                      <p>{item.title}</p>
                      <img
                        src={
                          "https://image.tmdb.org/t/p/original/" +
                          item.poster_path
                        }
                      />
                      <p>Released on : {item.release_date}</p>
                    </div>
                  );
                })}
          </div>
        </>
      )}
    </>
  );
}

export { Action };
