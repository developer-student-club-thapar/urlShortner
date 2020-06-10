import React, { Component } from 'react';
import styled from 'styled-components';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import MaterialHelperTextBox from '../components/MaterialHelperTextBox';
import InputLabel from '@material-ui/core/InputLabel';
// import Chip from '@material-ui/core/Chip';
//import MaterialComboBox from '../components/MaterialComboBox';
import MaterialUnderlineTextbox from '../components/MaterialUnderlineTextbox';
import MaterialButtonSuccess from '../components/MaterialButtonSuccess';
import MaterialButtonDark from '../components/MaterialButtonDark';
//import Snackbar from '@material-ui/core/Snackbar';http://localhost:5000/100bW9DvP
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
      button: true,
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
    const { button } = this.state;
    const { error } = this.state;
    return (
      <Container>
        <Rect gradientImage="Gradient_BTNZaAY.png">
          <form noValidate autoComplete="off">
            <MaterialHelperTextBox
              inputStyle="      https://"
              style={{
                height: 122,
                width: 698,
                position: 'absolute',
                left: 301,
                top: 0,
              }}
              stackedLabel="Enter the URL"
              value={this.state.longUrl}
              onChange={this.handleChange}
            ></MaterialHelperTextBox>
            <Rect6>
              <InputLabel id="demo-customized-select-label">
                Select Keyword
              </InputLabel>
              <Select
                label="Select Keyword"
                value={this.state.keyword}
                onChange={this.handleKeyword}
              >
                <MenuItem value={'dsctiet'}>dsctiet</MenuItem>
                <MenuItem value={'lorem ipsum'}>lorem ipsum</MenuItem>
              </Select>
            </Rect6>
            <MaterialButtonSuccess
              style={{
                height: 61,
                width: 178,
                position: 'absolute',
                left: 1269,
                top: 61,
                overflow: 'hidden',
                cursor: 'pointer',
              }}
              onClick={this.handleSubmit}
            ></MaterialButtonSuccess>
          </form>
          {error && (
            <Rect5>
              <Alert severity="warning" variant="filled">
                {this.state.error}
              </Alert>
            </Rect5>
          )}
          <MaterialUnderlineTextbox
            style={{
              height: 59,
              width: 698,
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
                height: 58,
                width: 107,
                position: 'absolute',
                left: 1229,
                top: 186,
                borderWidth: 1,
                elevation: 0,
                cursor: 'pointer',
              }}
            ></MaterialButtonDark>
          </CopyToClipboard>
          {button && (
            <QRCode
              value={this.state.shortUrl}
              style={{
                position: 'absolute',
                left: 1500,
                top: 91,
              }}
            />
          )}
          {button && (
            <Rect5>
              <Alert variant="filled" severity="info">
                Copied to Clipboard !
              </Alert>
            </Rect5>
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
  background-color: rgba(26, 35, 126, 0.81);
  margin-top: 132px;
  position: relative;
  display: flex;
  box-shadow: 5px 5px 10px 0.14px rgba(0, 0, 0, 1);
`;

const Rect5 = styled.div`
  top: 271px;
  left: 1171px;
  width: 295px;
  height: 44px;
  position: absolute;
  background-color: rgba(15, 15, 15, 0.45);
`;
const Rect6 = styled.div`
  top: 51px;
  left: 1067px;
  width: 181px;
  height: 61px;
  position: absolute;
`;

export default HomeScreen;
