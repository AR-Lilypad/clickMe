import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import "./App.css";
import Footer from "./components/Footer";

const App = () => (
  <div className="container-fluid wrapper">
    <NavBar />
    <Header />
    <GameBoard />
    <Footer />
  </div>
);

export default App;
