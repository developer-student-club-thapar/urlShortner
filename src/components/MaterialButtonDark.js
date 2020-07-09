import React from 'react';
import styled from 'styled-components';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
function MaterialButtonDark(props) {
  return (
    <Container {...props}>
      <FileCopyIcon />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Copy = styled.span`
  font-family: Roboto;
  color: #fff;
  font-size: 20px;
  margin: 0px;
`;

export default MaterialButtonDark;
