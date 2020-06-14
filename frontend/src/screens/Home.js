import React, { Component } from 'react';
import styled from 'styled-components';

import Snackbar from '@material-ui/core/Snackbar';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import MaterialHelperTextBox from '../components/MaterialHelperTextBox';
import InputLabel from '@material-ui/core/InputLabel';
import Zoom from '@material-ui/core/Zoom';
import Fade from '@material-ui/core/Fade';
import MaterialUnderlineTextbox from '../components/MaterialUnderlineTextbox';
import MaterialButtonSuccess from '../components/MaterialButtonSuccess';
import MaterialButtonDark from '../components/MaterialButtonDark';
import Alert from '@material-ui/lab/Alert';
var QRCode = require('qrcode.react');

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
    });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({
      error: '',
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
    const { error } = this.state;
    const { submitButton } = this.state;
    return (
      <Container>
        <Rect gradientImage="Gradient_BTNZaAY.png">
          <form noValidate autoComplete="off">
            <MaterialHelperTextBox
              inputStyle="Enter the URL"
              style={{
                height: 72,
                width: 1477,
                position: 'absolute',
                left: 301,
                top: 70,
                borderRadius: 100,
              }}
              value={this.state.longUrl}
              onChange={this.handleChange}
            ></MaterialHelperTextBox>
            <Rect6>
              <InputLabel>Select Keyword</InputLabel>
              <Select value={this.state.keyword} onChange={this.handleKeyword}>
                <MenuItem value={'dsctiet'}>dsctiet</MenuItem>
                <MenuItem value={'lorem ipsum'}>lorem ipsum</MenuItem>
              </Select>
            </Rect6>
            <MaterialButtonSuccess
              style={{
                height: 72,
                width: 138,
                position: 'absolute',
                left: 1485,
                top: 70,
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
                vertical: 'top',
                horizontal: 'center',
              }}
              autoHideDuration={3000}
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
                    height: 59,
                    width: 748,
                    position: 'absolute',
                    left: 492,
                    top: 186,
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
                      height: 61,
                      width: 107,
                      position: 'absolute',
                      left: 1129,
                      top: 186,
                      borderWidth: 1,
                      elevation: 0,
                      cursor: 'pointer',
                    }}
                  ></MaterialButtonDark>
                </CopyToClipboard>
              </Rect7>
            </Fade>
          )}
          {copyButton && (
            <Zoom in={copyButton}>
              <QRCode
                value={this.state.shortUrl}
                style={{
                  position: 'absolute',
                  left: 1500,
                  top: 91,
                }}
              />
            </Zoom>
          )}
          {copyButton && (
            <div
              style={{
                top: 271,
                left: 1171,
                width: 295,
                height: 44,
                position: 'absolute',
                background: 'rgba(15, 15, 15, 0.45)',
              }}
            >
              <Alert variant="filled" severity="info">
                Copied to Clipboard !
              </Alert>
            </div>
          )}
          ,
        </Rect>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  background: transparent;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;
/*const Image = styled.div`
  top: 0px;
  left: 0px;
  width: 1940px;
  height: 1080px;
  position: absolute;
  flex-direction: column;
  display: flex;
  background-image: url(${require('../assets/images/background.png')});
  background-size: cover;
  overflow: hidden;
`;*/

const Rect = styled.div`
  width: 1974;
  height: 346px;
  position: absolute;
  overflow: hidden;
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
  top: 161px;
  left: 567px;
  width: 281px;
  height: 61px;
  position: absolute;
`;

export default HomeScreen;
