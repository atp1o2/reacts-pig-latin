import React, { Component } from 'react';
import { Grid, Nav } from 'react-bootstrap';
import Masthead from '../components/masthead/Masthead';
import Footer from '../components/Footer';

class Main extends Component {
  render () {
    return (
      <Grid>
        <Masthead />
        <main className="main">
          {this.props.children}
        </main>
        <Footer />
      </Grid>
    );
  }
}

export default Main;
