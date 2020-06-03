import React, { Component } from 'react';
import styled, { css } from 'styled-components';

function MaterialButtonDark(props) {
  return (
    <Container {...props}>
      <Copy>COPY</Copy>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  min-width: 88px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: #212121;
  box-shadow: 5px 5px 5px 0.35px #000;
`;

const Copy = styled.span`
  font-family: Roboto;
  color: #fff;
  font-size: 20px;
  margin: 0px;
`;

export default MaterialButtonDark;
