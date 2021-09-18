import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import beastData from './data.json';

export default class Main extends Component {
  // filter beastbios from props and see if they match the number of horns from dropdown
  filterHorns = e => {
    const numOfHorns = parseInt(e.target.value);
    let filteredBeastArray = beastData;
    // console.log(filteredBeastArray);
    if (numOfHorns) {
      filteredBeastArray = beastData.filter(
        beast => beast.horns === numOfHorns
      );
      // console.log(this.props.beastBios);
    }
    // call a fn in app.js to list the state of beastbios
    this.props.displayBeasts(filteredBeastArray);
  };
  render() {
    return (
      <>
        {/* // Form goes here */}
        <Form>
          <Form.Select onChange={this.filterHorns}>
            <option value="">Select...</option>
            <option value="1">One-horned beasts</option>
            <option value="2">Two-horned beasts</option>
            <option value="3">Three-horned beasts</option>
            <option value="100">Hundred-horned beasts</option>
            <option value="">All beasts</option>
          </Form.Select>
        </Form>
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
      </>
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
