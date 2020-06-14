import React from 'react';
import styled from 'styled-components';

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
  background-color: #263238;
  border-radius: 0px 100px 100px 0px;
  border: 1px;
  box-shadow: 2px 2px 5px 0.35px #111111;
`;

const Copy = styled.span`
  font-family: Roboto;
  color: #fff;
  font-size: 20px;
  margin: 0px;
`;

export default MaterialButtonDark;
