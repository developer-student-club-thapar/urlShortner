import React, { Component } from 'react';
import styled from 'styled-components';

import Snackbar from '@material-ui/core/Snackbar';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import MaterialHelperTextBox from '../components/MaterialHelperTextBox';
import TextField from '@material-ui/core/TextField';
import Zoom from '@material-ui/core/Zoom';
import Fade from '@material-ui/core/Fade';
import MaterialUnderlineTextbox from '../components/MaterialUnderlineTextbox';
import MaterialButtonSuccess from '../components/MaterialButtonSuccess';
import MaterialButtonDark from '../components/MaterialButtonDark';
import Alert from '@material-ui/lab/Alert';
var QRCode = require('qrcode.react');

const keywords = [
  {
    value: 'dsctiet',
    label: 'dsctiet',
  },
  {
    value: '',
    label: 'lorem ipsum',
  },
];
class HomeScreen extends Component {
  state = {
    longUrl: '',
    shortUrl: '',
    error: '',
    keyword: '',
  };
  handleKeyword = event => {
    this.setState({
      keyword: event.target.value,
    }); // console.log(event.target.value);
  };

  handleChange = event => {
    this.setState({
      longUrl: event.target.value,
      shortUrl: '',
    });
    // console.log(event.target.value);
  };
  handleCopy = event => {
    event.preventDefault();
    this.setState({
      copyButton: true,
      copyAlert: true,
    });
  };
  handleKeyword = event => {
    this.setState({
      keyword: event.target.value,
    });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({
      error: '',
      copyAlert: false,
    });
  };

  handleSubmit = async event => {
    // console.log(this.state.longUrl);
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/url/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          longUrl: this.state.longUrl,
          keyword: this.state.keyword,
        }),
      });

      const responseData = await response.json();
      if (typeof responseData == 'object') {
        this.setState({
          shortUrl: responseData.shortUrl,
          submitButton: true,
        });
        console.log(responseData.keyword);
      } else {
        console.log(responseData);
        this.setState({
          error: responseData,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { copyButton } = this.state;
    const { copyAlert } = this.state;
    const { error } = this.state;
    const { submitButton } = this.state;
    return (
      <Container>
        <Rect>
          <Grid container>
            <Grid item xs={3} sm={3} md={3} />
            <Grid item xs={10} sm={5} md={5} lg={5} xl={2}>
              <form noValidate autoComplete="off">
                <FormControl>
                  <MaterialHelperTextBox
                    inputStyle="Enter the URL"
                    style={{
                      height: 62,
                      position: 'absolute',
                      top: 60,
                      borderRadius: 100,
                    }}
                    value={this.state.longUrl}
                    onChange={this.handleChange}
                  ></MaterialHelperTextBox>
                </FormControl>
              </form>
            </Grid>
            <Grid item xs={1} md={1}>
              <MaterialButtonSuccess
                style={{
                  height: 62,
                  top: 60,
                  width: '10%',
                  position: 'absolute',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  background: 'rgba(1, 87, 155, 100)',
                }}
                onClick={this.handleSubmit}
              ></MaterialButtonSuccess>
            </Grid>
            <Grid item xs={5} sm={5} md={5} />
            <Grid item xs={7}>
              <FormControl>
                <TextField
                  select
                  label="Domain"
                  style={{
                    height: 62,
                    position: 'absolute',
                    width: 120,
                    top: 130,
                    background: 'rgba(230, 230, 230, 0.88)',
                    disableUnderline: true,
                  }}
                  required
                  value={this.state.keyword}
                  onChange={this.handleKeyword}
                  variant="filled"
                >
                  {keywords.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </FormControl>
            </Grid>
            {error && (
              <Snackbar
                open={error}
                TransitionComponent={Zoom}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                autoHideDuration={6000}
                onClose={this.handleClose}
              >
                <Alert
                  onClose={this.handleClose}
                  severity="warning"
                  variant="filled"
                >
                  {this.state.error}
                </Alert>
              </Snackbar>
            )}
            {submitButton && (
              <Fade in={submitButton}>
                <Rect7>
                  <MaterialUnderlineTextbox
                    style={{
                      height: 49,
                      width: 388,
                      position: 'absolute',
                      left: 472,
                      top: 286,
                      borderWidth: 1,
                      borderColor: 'rgba(255,255,255,1)',
                      borderStyle: 'solid',
                    }}
                    inputStyle="Short url"
                    value={this.state.shortUrl}
                  ></MaterialUnderlineTextbox>

                  <CopyToClipboard text={this.state.shortUrl}>
                    <MaterialButtonDark
                      onClick={this.handleCopy}
                      style={{
                        height: 51,
                        width: 107,
                        position: 'absolute',
                        left: 842,
                        top: 286,
                        borderWidth: 1,
                        elevation: 0,
                        cursor: 'pointer',
                      }}
                    ></MaterialButtonDark>
                  </CopyToClipboard>
                </Rect7>
              </Fade>
            )}
            {copyAlert && (
              <Snackbar
                open={copyButton}
                TransitionComponent={Zoom}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                autoHideDuration={6000}
                onClose={this.handleClose}
              >
                <Alert
                  variant="filled"
                  severity="info"
                  onClose={this.handleClose}
                >
                  Copied to Clipboard !
                </Alert>
              </Snackbar>
            )}
            {copyButton && (
              <Zoom in={copyButton}>
                <QRCode
                  value={this.state.shortUrl}
                  style={{
                    position: 'absolute',
                    left: 1100,
                    top: 181,
                  }}
                />
              </Zoom>
            )}
          </Grid>
        </Rect>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  background: transparent;
  flex-direction: column;
  height: 90vh;
  width: 90vw;
`;

const Rect = styled.div`
  width: 1974;
  height: 346px;
  position: absolute;

  flex-direction: column;
  margin-top: 132px;
  position: relative;
  display: flex;
`;

const Rect7 = styled.div`
  top: 0px;
  left: 0px;
  width: 863px;
  height: 59px;
  position: absolute;
  border-radius: 100px;
`;

const Rect6 = styled.div`
height: 64,
width: 125,
position: 'absolute',
left: 450,
top: 180,
borderRadius: 100,
background: 'rgba(230, 230, 230, 0.88)',
`;

export default HomeScreen;
