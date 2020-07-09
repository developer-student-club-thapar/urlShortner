import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Container, Hidden } from '@material-ui/core';

const Footer = () => {
  return (
    <Fragment>
      <Paper
        elevation={0}
        style={{
          borderStyle: 'solid',
          borderWidth: '1px 0px 0px 0px',
          borderColor: 'grey',
          backgroundColor: 'inherit',
          color: ' inherit',
          width: '100%',
          height: '2%',
          bottom: 0,
          overflowX: 'hidden',
          textAlign: 'right',
        }}
      >
        <Container>
          <Hidden>
            <Grid>
              <h6>
                © Copyright 2020{' '}
                <span style={{ fontWeight: '500' }}>
                  DSC TIET | Developed with
                </span>{' '}
                ❤️
              </h6>
            </Grid>
          </Hidden>
        </Container>
      </Paper>
    </Fragment>
  );
};

export default Footer;
