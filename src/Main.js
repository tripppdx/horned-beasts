import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class Main extends Component {
  render() {
    const bios = this.props.beastBios;

    return (
      <Container fluid>
        <Row xs={1} sm={2} md={3} lg={4}>
          {bios.map((beast) => (
            <HornedBeast
              title={beast.title}
              description={beast.description}
              src={beast.image_url}
            />
          ))}
        </Row>
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
      <Card>
        <Card.Img variant="top" src={this.props.src} alt="some horned beast" />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>

          <Button onClick={this.handleClick} variant="secondary">
            ❤️ {this.state.likes}
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

// export default Main;
