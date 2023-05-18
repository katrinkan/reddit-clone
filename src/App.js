import React from "react";
import Header from "./features/header/Header";
import Home from "./features/home/Home";
import Trending from "./features/trending/Trending";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Trending />
      <Home />
    </div>
  );
}

export default App;
