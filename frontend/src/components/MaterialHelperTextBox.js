import React from 'react';
import styled from 'styled-components';

function MaterialHelperTextBox(props) {
  return (
    <Container {...props}>
      <StackedLabel>{props.stackedLabel || 'StackedLabel'}</StackedLabel>
      <InputStyle placeholder={props.inputStyle || 'Input'}></InputStyle>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: transparent;
  flex-direction: column;
`;

const StackedLabel = styled.span`
  font-family: Roboto;
  font-size: 32px;
  text-align: justify;
  color: rgba(255, 255, 255, 1);
  opacity: 0.6;
  padding-top: 16px;
  font-style: normal;
  font-weight: 700;
`;

const InputStyle = styled.input`
  font-family: Roboto;
  color: rgba(250, 246, 246, 1);
  font-size: 20px;
  align-self: stretch;
  line-height: 16px;
  padding-top: 8px;
  flex: 1 1 0%;
  padding-bottom: 8px;
  width: 698px;
  font-style: normal;
  font-weight: regular;
  text-align: justify;
  background-color: rgba(230, 230, 230, 0.68);
  border-width: 1px;
  border-color: rgba(74,144,226,1);
  opacity: 0.85;
  border-style: solid;
  background: transparent;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 20px 0.44px rgba(0, 0, 0, 1);
`;

export default MaterialHelperTextBox;
