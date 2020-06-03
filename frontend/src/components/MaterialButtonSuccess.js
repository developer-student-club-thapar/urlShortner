import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialButtonSuccess(props) {
  return (
    <Container {...props}>
      <Shorten>{props.shorten || "SHORTEN"}</Shorten>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(65,117,5,1);
  justify-content: center;
  align-items: center;
  flex-direction: row;
  min-width: 88px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 28px;
  box-shadow: 0px 1px 5px  0.35px #000 ;
`;

const Shorten = styled.span`
  font-family: Calibri;
  color: #fff;
  font-size: 30px;
  margin: 0px;
  font-style: normal;
  font-weight: light;
`;

export default MaterialButtonSuccess;
