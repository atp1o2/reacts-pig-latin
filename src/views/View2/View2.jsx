import React, { Component } from 'react';
import styled from 'styled-components';

const ViewStyle = styled.div`
    text-align: center;
`;

export default class View2 extends Component {
  render () {
    return (
      <ViewStyle>
        <h1>View 2</h1>
      </ViewStyle>
    );
  }
}
