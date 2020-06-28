import React, { Component } from 'react';
import styled from 'styled-components';
import Snackbar from '@material-ui/core/Snackbar';
import FormControl from '@material-ui/core/FormControl';
//import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import MaterialHelperTextBox from '../components/MaterialHelperTextBox';
import TextField from '@material-ui/core/TextField';
import Zoom from '@material-ui/core/Zoom';
import Fade from '@material-ui/core/Fade';
import MaterialUnderlineTextbox from '../components/MaterialUnderlineTextbox';
import MaterialButtonSuccess from '../components/MaterialButtonSuccess';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import CropFreeIcon from '@material-ui/icons/CropFree';
//import Typography from '@material-ui/core/Typography';
var QRCode = require('qrcode.react');
const illustration = require('../assets/images/illustration.png');
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  illustration: {
    marginLeft: theme.spacing(70),
    objectFit: 'contain',
    cursor: 'pointer',
  },
}));
const keywords = [
  {
    value: '',
    label: 'lorem ipsum',
  },
  {
    value: 'dsctiet.tech',
    label: 'dsctiet',
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
      copyAlert: true,
    });
  };

  handleQr = event => {
    this.setState({
      qrButton: true,
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
          customurl: this.state.customUrl,
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
    const { qrButton } = this.state;
    const { copyAlert } = this.state;
    const { error } = this.state;
    const { submitButton } = this.state;
    const { cusUrlCheck } = this.state;
    return (
      <Container fixed>
        <Grid
          container
          spacing={4}
          style={{
            marginTop: '130px',
          }}
        >
          <Grid item xs={7}>
            <h1>Lorem Ipsum</h1>
            <em style={{ lineWrapping: 'true', fontWeight: '100' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              faucibus erat lacinia magna gravida consequat. Suspendisse risus
              turpis, egestas non sem ac, ultricies scelerisque est. Proin
              imperdiet tincidunt rutrum. Nunc semper congue ligula dignissim
              euismod.
            </em>
          </Grid>
          <Grid item>
            <img
              src={illustration}
              className={useStyles.illustration}
              alt="illustration"
              id="illustration"
              onClick={() => {
                window.open('https://dsctiet.tech/');
              }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={4} style={{ marginTop: '200px' }}>
          <Grid item xs />
          <Grid item xs={5}>
            <TextField
              label="Enter the URL"
              style={{
                height: 62,
                width: '34%',
                position: 'absolute',
                background: 'rgba(230, 230, 230, 0.88)',
              }}
              variant="filled"
              value={this.state.longUrl}
              onChange={this.handleChange}
            ></TextField>
          </Grid>
          <Grid item xs={3}>
            <TextField
              select
              label="Domain"
              style={{
                height: 62,
                position: 'absolute',
                width: '11%',
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
              ))}{' '}
            </TextField>
          </Grid>
          <Grid item xs={3}>
            <MaterialButtonSuccess
              style={{
                height: 62,
                width: '10%',
                position: 'absolute',
                overflow: 'hidden',
                cursor: 'pointer',
                background: 'rgba(1, 87, 155, 100)',
              }}
              onClick={this.handleSubmit}
            ></MaterialButtonSuccess>
          </Grid>
          <Grid item xs />
        </Grid>
        <Grid container spacing={3} style={{ marginTop: '80px' }}>
          <Grid item xs />
          <Grid item xs={4}>
            <span style={{ fontWeight: '100' }}>
              <Button
                onClick={this.handleCustomurl}
                style={{
                  color: 'inherit',
                }}
              >
                Custom Url ?
              </Button>
            </span>
            {cusUrlCheck && (
              <Fade in={cusUrlCheck}>
                <TextField
                  label="Custom URL"
                  value={this.state.customUrl}
                  onChange={this.handleCustomurl}
                  style={{
                    position: 'absolute',
                    width: '18%',
                    marginLeft: '80px',
                    background: 'rgba(230, 230, 230, 0.88)',
                    disableUnderline: true,
                  }}
                  variant="filled"
                ></TextField>
              </Fade>
            )}
          </Grid>

          <Grid item xs />
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
            <Grid
              container
              spacing={2}
              alignItems="center"
              style={{ marginTop: '20px' }}
            >
              <Grid item xs />
              <Grid item xs={5}>
                <MaterialUnderlineTextbox
                  style={{
                    height: 49,
                    width: 398,
                    position: 'absolute',
                    borderWidth: 1,
                    borderColor: 'rgba(255,255,255,1)',
                    borderStyle: 'solid',
                  }}
                  inputStyle="Short url"
                  value={this.state.shortUrl}
                />
                <CopyToClipboard text={this.state.shortUrl}>
                  <FileCopyOutlinedIcon
                    fontSize="medium"
                    onClick={this.handleCopy}
                    style={{
                      position: 'absolute',
                      elevation: 0,
                      cursor: 'pointer',
                      marginTop: '10px',
                      marginLeft: '330px',
                      color: '#263238',
                      cursorText: 'copy',
                    }}
                  />
                </CopyToClipboard>
                {copyAlert && (
                  <Snackbar
                    open={copyAlert}
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
                <CropFreeIcon
                  fontSize="medium"
                  onClick={this.handleQr}
                  style={{
                    position: 'absolute',
                    elevation: 0,
                    cursor: 'pointer',
                    marginTop: '10px',
                    marginLeft: '360px',
                    color: '#263238',
                    cursorText: 'QR',
                  }}
                />
              </Grid>

              {qrButton && (
                <Grid item xs={3}>
                  <Zoom in={qrButton}>
                    <QRCode
                      value={this.state.shortUrl}
                      style={{
                        position: 'absolute',
                      }}
                    />
                  </Zoom>
                </Grid>
              )}
              <Grid item xs />
            </Grid>
          </Fade>
        )}
        <Grid container style={{ marginTop: '250px' }} />
      </Container>
    );
  }
}

export default HomeScreen;
