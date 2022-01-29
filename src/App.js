import { React, useState } from "react";
import { Route, Routes } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Home from "./Home";
import NewWord from "./NewWord";
import Update from "./Update";
import { db } from "./firebase";
import { collection, getDoc, getDocs, addDoc } from "firebase/firestore";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<NewWord />} />
        <Route path="/update/:my_id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
