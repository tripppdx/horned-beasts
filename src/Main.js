import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class Main extends Component {
  render() {
    // const bios = this.props.beastBios;

    return (
      <Container fluid>
        <Row xs={1} sm={2} md={3} lg={4}>
          {this.props.beastBios.map(beast => (
            <HornedBeast
              key={beast.title}
              beast={beast}
              changeBeast={this.props.selectedBeast}
              showModal={this.props.showModal}
              setBeastModal={this.props.setBeastModal}
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

  handleLikeClick = event => {
    // toggle the status between Yay and Nay
    this.setState({
      likes: this.state.likes + 1,
    });
  };

  handleBeastClick = () => {
    this.props.setBeastModal(this.props.beast);
    this.props.showModal();
  };

  render() {
    return (
      <Card>
        <Card.Img
          onClick={this.handleBeastClick}
          variant="top"
          src={this.props.beast.image_url}
          alt={this.props.beast.description}
        />
        <Card.Body>
          <Card.Title>{this.props.beast.title}</Card.Title>
          <Card.Text>{this.props.beast.description}</Card.Text>

          <Button onClick={this.handleLikeClick} variant="secondary">
            ❤️ {this.state.likes}
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
