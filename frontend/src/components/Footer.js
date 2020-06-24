import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';

const FooterAlt = () => {
  return (
    <Fragment>
      <Paper
        elevation={0}
        style={{
          borderStyle: 'solid',
          borderWidth: '1px 0px 0px 0px',
          borderColor: 'grey',
          backgroundColor: 'inherit',
        }}
      >
        <Container>
          <Grid>
            <h6>
              © Copyright 2020{' '}
              <span style={{ fontWeight: '500' }}>
                DSC TIET | Developed with
              </span>{' '}
              ❤️
            </h6>
          </Grid>
        </Container>
      </Paper>
    </Fragment>
  );
};

export default FooterAlt;
