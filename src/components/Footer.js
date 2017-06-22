import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { Grid, Row, Col, Nav } from 'react-bootstrap';
import Brand from '../styles/variables';
import FacebookIcon from '../img/icons/facebook.svg';
import TwitterIcon from '../img/icons/twitter-alt.svg';

const FooterStyle = styled.footer`
  bottom: 0;
  height: 10rem;
  width: 100%;
  left: 0;
  padding-top: 5rem;
  margin-top: 5rem;
  text-align: center;
  color: ${Brand.grey};
  ul {
    padding-top: 2rem;
    display: -webkit-inline-box
  }
  a {
    margin: 1rem;
  }
  img {
    margin: 1rem;
    max-width: 5rem;
    max-height: 5rem;
    margin-bottom: 2rem;
  }
`;

class Footer extends Component {
  render () {
    return (
      <FooterStyle>
      <Grid>
        <Row>
          <Col xs={12} sm={4}>
              <Nav>
                <Link to="Link">
                  Link
                </Link>
                <Link to="FAQ">
                  FAQ
                </Link>
              </Nav>
          </Col>
          <Col xs={12} sm={4} smPush={4}>
            <Nav>
              <Link to="Contact">
                Contact
              </Link>
              <Link to="Terms-Of-Use">
                Terms
              </Link>
              <Link to="Private-Policy">
                Privacy
              </Link>
            </Nav>
          </Col>
          <Col xs={12} sm={4} smPull={4}>
            <Link to="/"><img src={FacebookIcon} alt="Facebook"/></Link>
            <Link to="/"><img src={TwitterIcon} alt="Twitter"/></Link>
            <p>©Copyright 2017 ATP</p>
          </Col>
        </Row>
        </Grid>
      </FooterStyle>
    );
  }
}

export default Footer;
