import React from 'react';
import styled from 'styled-components';

function MaterialUnderlineTextbox(props) {
  return (
    <Container {...props}>
      <InputStyle
        value={props.value}
        disabled={true}
        dataDetector="link"
      ></InputStyle>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border-bottom-width: 1px;
  border-color: #111111;
  background-color: transparent;
  flex-direction: row;
  align-items: center;
`;

const InputStyle = styled.input`
  font-family: Roboto;
  color: rgba(255, 255, 255, 0.7);
  padding-right: 5px;
  font-size: 20px;
  align-self: stretch;
  flex: 1 1 0%;
  line-height: 16px;
  padding-top: 16px;
  padding-left: 40px;
  padding-bottom: 16px;
  border: none;
  background: transparent;
  flex-direction: column;
`;

export default MaterialUnderlineTextbox;
