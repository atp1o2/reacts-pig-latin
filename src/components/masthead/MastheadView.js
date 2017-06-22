import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router';
import styled from 'styled-components';

const Masthead = styled.nav`
  height: auto;
  width: 98%;
  .container {
    width: 100%;
  }
  .navbar {
    box-shadow: none;
  }
  img {
    max-height: 45px;
    max-width: 100%;
  }
  ul {
    margin-top: 3rem;
  }
  a {
    margin: 0 1rem;
  }
  @media only screen and (max-width: 485px) {
    .mobile-hide {
      display: none;
    }
    text-align: center;
  }
`;

export default class MastheadView extends Component {
  render () {
    return (
      <Masthead>
        <Navbar>
          <Navbar.Header>
            <h1>Trainer Rx</h1>
          </Navbar.Header>
          <Nav pullRight>
            <Link to="View1" className="mobile-hide">
              Translator
            </Link>
            <Link to="View2" className="mobile-hide">
              Code
            </Link>
          </Nav>
        </Navbar>
      </Masthead>
    );
  }
}
