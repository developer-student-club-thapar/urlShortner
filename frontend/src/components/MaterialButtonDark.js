import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialButtonDark(props) {
  return (
    <Container {...props}>
      <Copy>COPY</Copy>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #212121;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 2px;
  min-width: 88px;
  padding-left: 16px;
  padding-right: 16px;
  box-shadow: 0px 1px 5px  0.35px #000 ;
`;

const Copy = styled.span`
  font-family: Roboto;
  color: #fff;
  font-size: 20px;
`;

export default MaterialButtonDark;
