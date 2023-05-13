import React from "react";
import Header from "./features/header/Header";
import Card from "./features/card/Card";
import Trending from "./features/trending/Trending";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Trending />
      <Card />
    </div>
  );
}

export default App;
