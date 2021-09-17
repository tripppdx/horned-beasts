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
      showModal: false,
    };
  }

  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <Container fluid>
        <Header title="Horned Beasts" />
        <Main beastBios={beastBios} />
        <Footer text="Author: Harvey Lucas" />
        <BeastModal />
      </Container>
    );
  }
}
