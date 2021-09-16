import { Component } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Main extends Component {
  render() {
    const bios = this.props.beastBios;

    return (
      <Container>
        {bios.map((beast) => (
          <HornedBeast
            title={beast.title}
            description={beast.description}
            src={beast.image_url}
          />
        ))}
      </Container>
    );
  }
}

class HornedBeast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
    };
  }

  handleClick = (event) => {
    // toggle the status between Yay and Nay
    this.setState({
      likes: this.state.likes + 1,
    });
  };

  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <Image
          onClick={this.handleClick}
          src={this.props.src}
          alt="some horned beast"
          width="20%"
        />
        <p>{this.props.description}</p>
        <h3>❤️ {this.state.likes}</h3>
      </>
    );
  }
}

// export default Main;
