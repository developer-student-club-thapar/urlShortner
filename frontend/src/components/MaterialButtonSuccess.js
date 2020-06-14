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

  justify-content: center;
  align-items: center;
  flex-direction: row;
  min-width: 88px;
  padding-left: 16px;
  padding-right: 16px;
  border-width: 0.5px;
  border-radius: 0px 100px 100px 0px;
  box-shadow: 5px 5px 20px 0.2px rgba(0, 0, 0, 1);
`;

const Shorten = styled.span`
  font-family: Roboto;
  color: #fff;
  font-size: 25px;
  margin: 0px;
  font-style: normal;
  font-weight: regular;
`;

export default MaterialButtonSuccess;
