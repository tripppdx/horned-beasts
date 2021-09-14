import { Component } from "react";

const hornedBeasts = [
  {
    image_url:
      "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
    title: "UniWhal",
    description: "A unicorn and a narwhal nuzzling their horns",
    keyword: "narwhal",
    horns: 1,
  },

  {
    image_url:
      "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
    title: "Rhino Family",
    description: "Mother (or father) rhino with two babies",
    keyword: "rhino",
    horns: 2,
  },

  {
    image_url:
      "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
    title: "Unicorn Head",
    description: "Someone wearing a creepy unicorn head mask",
    keyword: "unicorn",
    horns: 1,
  },
];

class Main extends Component {
  // needs to know the title pass in somehow...
  render() {
    return (
      // <div>
      //   <h1>I am Main my message is {this.props.message}</h1>
      //   <HornedBeast />
      // </div>
      <>
        {/* <h1>I am Main my message is {this.props.message}</h1> */}
        <HornedBeast
          title={`${hornedBeasts[0].title}`}
          description={`${hornedBeasts[0].description}`}
        />
        <HornedBeast
          title={`${hornedBeasts[1].title}`}
          description={`${hornedBeasts[1].description}`}
        />
        <HornedBeast
          title={`${hornedBeasts[2].title}`}
          description={`${hornedBeasts[2].description}`}
        />
      </>
    );
  }
}

class HornedBeast extends Component {
  render() {
    return (
      <>
        <h2>I am a horned beast with title of {this.props.title}</h2>
        <h2>My image is</h2>
        <img
          src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
          alt={"narwhal"}
        />
        <h2>My description is</h2>
        <p>{this.props.description}</p>
      </>
    );
  }
}

export default Main;
