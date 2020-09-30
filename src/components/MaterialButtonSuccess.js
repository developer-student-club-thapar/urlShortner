import React from 'react';
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';

function MaterialButtonSuccess(props) {
  return (
    <Container {...props}>
      <Shorten>              
            {props.loading ? (
                <CircularProgress size={20} />
            ) : (
              props.shorten || ('Shorten')
            )}
        </Shorten>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-left: 16px;
  padding-right: 16px;
  border-width: 0.5px;
  border-radius: 0px 0px 0px 0px;
`;

const Shorten = styled.span`
  font-family: Roboto;
  color: #fff;
  font-size: 22px;
  margin: 0px;
  font-style: normal;
  font-weight: regular;
`;

export default MaterialButtonSuccess;
