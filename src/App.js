import "./App.css";
import { Component } from "react";
import Header from "./Header.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Main message={"Hi there"} />
      <Footer />
    </div>
  );
}

class Footer extends Component {
  render() {
    return <h1>I am a footer</h1>;
  }
}

class Main extends Component {
  // needs to know the title pass in somehow...
  render() {
    return (
      // <div>
      //   <h1>I am Main my message is {this.props.message}</h1>
      //   <HornedBeast />
      // </div>
      <>
        <h1>I am Main my message is {this.props.message}</h1>
        <HornedBeast title={"Rhino"} />
      </>
    );
  }
}

class HornedBeast extends Component {
  render() {
    return <h1>I am a horned beast with title of {this.props.title}</h1>;
  }
}

export default App;
