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
  .phrases {
    border: 1px solid gray;
    height: 10rem;
    font-size: 18px;
    margin-top: 4rem;
    padding: 2rem;
    border-radius: 10px;
  }
`;

export default class View1 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      english: '',
      pLatin: '',
      phrases: [],
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.savePhrase = this.savePhrase.bind(this);
    this.clearForm = this.clearForm.bind(this);
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

  clearForm (e) {
    e.preventDefault();
    this.setState({
      english: '',
      pLatin: '',
    })
  }

  savePhrase (e) {
    e.preventDefault();
    let phrasePair = {
      "english": this.state.english,
      "pLatin": this.state.pLatin,
    }

    this.setState({
      ...this.state,
      phrases: this.state.phrases.concat(phrasePair)
    })
  }

  render () {
    let phrasesList = this.state.phrases.map((phrase, i) => {
      return (
        <Row key={i} className="phrases">
          <p><span className="h4">English: </span>{phrase.english}</p>
          <p><span className="h4">PigLatin: </span>{phrase.pLatin}</p>
        </Row>
      )
    })
    return (
      <ViewStyle>
        <hr />
        <h1>English -> <span className="font-green">Pig Latin</span></h1>

        <Form onSubmit={this.savePhrase}>
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
            <Button className="mt-3" onClick={this.clearForm}>Clear</Button>
          </Row>
        </Form>

        <Row>
          {phrasesList}
        </Row>

      </ViewStyle>
    );
  }
}
