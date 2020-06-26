import React from 'react';
import styled from 'styled-components';

function MaterialHelperTextBox(props) {
  return (
    <Container {...props}>
      <InputStyle placeholder={props.inputStyle}></InputStyle>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: transparent;
  flex-direction: column;
`;

const InputStyle = styled.input`
  font-family: Roboto;
  color: rgba(0, 0, 0, 1);
  font-size: 20px;
  align-self: stretch;
  line-height: 16px;
  padding-top: 8px;
  padding-left: 10px;
  flex: 1 1 0%;
  padding-bottom: 8px;

  font-style: normal;
  font-weight: regular;
  text-align: justify;
  background-color: rgba(230, 230, 230, 0.88);
  border-width: 0.5px;
  opacity: 0.85;
  border-style: solid;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 5px 0.2px rgba(0, 0, 0, 0.7);
`;

export default MaterialHelperTextBox;
