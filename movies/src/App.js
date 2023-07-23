import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Components/Header";
import { Navbar } from "./Components/Navbar";
import { Action } from "./Components/Action";
import { Horror } from "./Components/Horror";
import { Comedy } from "./Components/Comedy";
import { Romance } from "./Components/Romance";
import { Popular } from "./Components/Popular";
import { UseFetch } from "./Components/UseFetch";

function App() {
  const [searchActionMovie, setSearchActionMovie] = useState("");
  const [searchDebounceActionMovie, setSearchDebounceActionMovie] =
    useState("");

  const [searchHorrorMovie, setSearchHorrorMovie] = useState(null);
  const [searchComedyMovie, setSearchComedyMovie] = useState(null);
  const [searchRomanceMovie, setSearchRomanceMovie] = useState(null);
  const [searchPopularMovie, setSearchPopularMovie] = useState(null);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Popular />} />
          <Route
            exact
            path="/Action"
            element={
              <Action
                searchActionMovie={searchActionMovie}
                setSearchActionMovie={setSearchActionMovie}
                searchDebounceActionMovie={searchDebounceActionMovie}
                setSearchDebounceActionMovie={setSearchDebounceActionMovie}
              />
            }
          />
          <Route exact path="/Horror" element={<Horror />} />
          <Route exact path="/Comedy" element={<Comedy />} />
          <Route exact path="/Romance" element={<Romance />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
