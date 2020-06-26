import React, { Component } from 'react';
import styled from 'styled-components';
import Snackbar from '@material-ui/core/Snackbar';
import FormControl from '@material-ui/core/FormControl';
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
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import Typography from '@material-ui/core/Typography';
var QRCode = require('qrcode.react');

const keywords = [
  {
    value: 'google.in',
    label: 'google',
  },
  {
    value: 'dsctiet.tech',
    label: 'dsctiet',
  },
  {
    value: 'other.com',
    label: 'other',
  },
];
class HomeScreen extends Component {
  state = {
    longUrl: '',
    shortUrl: '',
    error: '',
    keyword: '',
    customUrl: '',
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
      customUrl: '',
      submitButton: false,
      copyButton: false,
      cusUrlCheck: false,
    });
    // console.log(event.target.value);
  };
  handleCopy = event => {
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

  handleCustomurl = event => {
    this.setState({
      customUrl: event.target.value,
      cusUrlCheck: true,
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
          customurl: this.state.customurl,
        }),
      });

      const responseData = await response.json();

      if (typeof responseData.error !== 'undefined') {
        this.setState({
          error: responseData.error,
          submitButton: false,
        });
      }
      if (typeof responseData.link !== 'undefined') {
        this.setState({
          shortUrl: responseData.link,
          submitButton: true,
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
    const { cusUrlCheck } = this.state;
    return (
      <Container>
        <Rect>
          <form noValidate autoComplete="off">
            <FormControl>
              <MaterialHelperTextBox
                inputStyle="Enter the URL"
                style={{
                  height: 62,
                  width: 650,
                  position: 'absolute',
                  left: 300,
                  top: 60,
                  borderRadius: 100,
                }}
                value={this.state.longUrl}
                onChange={this.handleChange}
              ></MaterialHelperTextBox>
              <TextField
                select
                label="Domain"
                style={{
                  height: 62,
                  position: 'absolute',
                  width: 120,
                  top: 60,
                  background: 'rgba(230, 230, 230, 0.88)',
                  disableUnderline: true,
                  left: 970,
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
              <span style={{ fontWeight: '100' }}>
                <Button
                  onClick={this.handleCustomurl}
                  style={{
                    top: 140,
                    left: 400,
                    color: 'inherit',
                  }}
                >
                  Custom Url ?
                </Button>
              </span>
              {cusUrlCheck && (
                <Fade in={cusUrlCheck}>
                  <TextField
                    label="Custom url"
                    value={this.state.customUrl}
                    onChange={this.handleCustomurl}
                    style={{
                      height: 62,
                      position: 'absolute',
                      width: 200,
                      top: 140,
                      background: 'rgba(230, 230, 230, 0.88)',
                      disableUnderline: true,
                      left: 600,
                    }}
                    variant="filled"
                  ></TextField>
                </Fade>
              )}
            </FormControl>
            <MaterialButtonSuccess
              style={{
                height: 62,
                width: 138,
                position: 'absolute',
                left: 1095,
                top: 60,
                overflow: 'hidden',
                cursor: 'pointer',
                background: 'rgba(1, 87, 155, 100)',
              }}
              onClick={this.handleSubmit}
            ></MaterialButtonSuccess>
          </form>

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

/*const Rect6 = styled.div`
height: 64,
width: 125,
position: 'absolute',
left: 450,
top: 180,
borderRadius: 100,
background: 'rgba(230, 230, 230, 0.88)',
`;*/

export default HomeScreen;
