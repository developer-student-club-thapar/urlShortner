import React from 'react';
import styled from 'styled-components';

function MaterialButtonSuccess(props) {
  return (
    <Container {...props}>
      <Shorten>{props.shorten || 'Shorten'}</Shorten>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(38, 198, 218, 1);
  justify-content: center;
  align-items: center;
  flex-direction: row;
  min-width: 88px;
  padding-left: 16px;
  padding-right: 16px;
  border-width: 0.5px;

  border-color: rgba(74, 144, 226, 1);
  box-shadow: 5px 5px 20px 0.2px rgba(0, 0, 0, 1);
`;

const Shorten = styled.span`
  font-family: Roboto;
  color: #000000;
  font-size: 25px;
  margin: 0px;
  font-style: normal;
  font-weight: regular;
`;

export default MaterialButtonSuccess;
