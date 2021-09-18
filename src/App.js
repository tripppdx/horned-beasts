import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import beastBios from './data.json';
import Container from 'react-bootstrap/Container';
import BeastModal from './BeastModal.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: {},
      showModal: false,
      beastBios: beastBios,
    };
  }

  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  // pass beast
  setBeastModal = beast => {
    this.setState({ selectedBeast: beast });
  };

  displayBeasts = beastArray => {
    this.setState({ beastBios: beastArray });
  };

  // fn that accepts filtered array and sets the state of beastbios with new filtered array
  render() {
    return (
      <Container fluid>
        <Header title="Horned Beasts" />
        <Main
          beastBios={this.state.beastBios}
          showModal={this.showModal}
          setBeastModal={this.setBeastModal}
          displayBeasts={this.displayBeasts}
        />
        <Footer text="Author: Harvey Lucas" />
        <BeastModal
          showModal={this.state.showModal}
          hideModal={this.hideModal}
          beast={this.state.selectedBeast}
        />
      </Container>
    );
  }
}
