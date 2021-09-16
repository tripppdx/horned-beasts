import "bootstrap/dist/css/bootstrap.min.css";
// import { Component } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import beastBios from "./data.json";

function App() {
  return (
    <div className="App">
      <Header title="Horned Beasts" />
      <Main message={"Don't Forget to Vote"} beastBios={beastBios} />
      <Footer text="Author: Harvey Lucas" />
    </div>
  );
}

export default App;
