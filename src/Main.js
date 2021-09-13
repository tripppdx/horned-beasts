import { Component } from "react";

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

export default Main;
