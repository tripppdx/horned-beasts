import "./App.css";
import { Component } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Main message={"Hi there"} />
      <Footer />
    </div>
  );
}

export default App;
