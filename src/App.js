import { React, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import Home from "./Home";
import NewWord from "./NewWord";
import Update from "./Update";
import Spinner from "./Spinner";
import "./App.css";
import styled from "styled-components";

function App() {
  const is_loaded = useSelector((state) => state.word.is_loaded);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<NewWord />} />
        <Route path="/update/:my_id" element={<Update />} />
      </Routes>
      {/* {!is_loaded && <Spinner />} */}
    </div>
  );
}

export default App;
