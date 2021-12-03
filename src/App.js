import React from "react";
import Navbar from "./component/navbar/Navbar";
import Header from "./component/header/Header";
import Card from "./component/cards/Card";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Card></Card>
    </div>
  );
};

export default App;
