import React, { Component } from 'react';
import styled from 'styled-components';
import { Form, Grid, Row, Col, Nav } from 'react-bootstrap';
import SingleInput from '../../components/SingleInput';
import Button from '../../components/Button';
import { pigLatinTranslator } from '../../helpers/pigLatinTranslator';

const ViewStyle = styled.div`
  input {
    font-size: 18px;
  }
  .font-green {
    color: darkgreen;
  }
  .border-g {
    border: 2px solid darkgreen;
    margin-top: 4rem;
  }
  .border-b {
    border: 1px solid black;
  }
  .border {
    border-radius: 10px;
    height: 6rem;
    padding: 1rem;
  }
`;


// Able to save original and translated phrases to localStorage

export default class View1 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      english: '',
      pLatin: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange (event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const pLatin = pigLatinTranslator(value)
    this.setState({
      [name]: value,
      pLatin: pLatin,
    });
  }

  render () {
    return (
      <ViewStyle>
        <hr />
        <h1>English -> <span className="font-green">Pig Latin</span></h1>

        <Form onSubmit={this.handleFormSubmit}>
          <Row>
            <SingleInput
              className="border border-b"
              placeholder={"Start typing to translate..."}
              name={"english"}
              type={"text"}
              content={this.state.english}
              onChange={this.handleInputChange} />
          </Row>
          <Row className="border border-g">
            <h4>{this.state.pLatin}</h4>
          </Row>
          <Row>
            <Button className="mt-3" type="submit">Save Phrase</Button>
          </Row>
        </Form>


      </ViewStyle>
    );
  }
}
