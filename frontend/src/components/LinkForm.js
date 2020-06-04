import React, { Component } from 'react';
//import Link from './Link';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const classes = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

//const classes = usStyles();

/*const ALL_LINKS = [
    {
        id: '1',
        hash: 'ABC',
        url: 'http://google.com',
        description: 'Google shortlink',
    },
    {
        id: '2',
        hash: 'DEF',
        url: 'http://graph.cool',
        description: 'Graphcool shortlink',
    },
    {
        id: '3',
        hash: 'GHI',
        url: 'http://reactjs.org',
        description: 'ReactJS shortlink',
    },
]; */

class LinkForm extends Component {
  state = {
    longUrl: '',
    shortUrl: '',
  };

  handleChange = event => {
    this.setState({
      longUrl: event.target.value,
    });
    // console.log(event.target.value);
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
        }),
      });
      const responseData = await response.json();

      this.setState({
        shortUrl: responseData.shortUrl,
      });
      // console.log(responseData)
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className={classes.root}>
        <foreground />
        <form noValidate autoComplete="off">
          <TextField
            id="outlined-textarea"
            // label="Multiline Placeholder"
            placeholder="Enter the URL"
            multilinevariant="outlined"
            label="URL"
            value={this.state.longUrl}
            onChange={this.handleChange}
          />

          <div>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={this.handleSubmit}
            >
              {' '}
              Submit{' '}
            </Button>{' '}
          </div>
        </form>

        <TextField placeholder="Short Url" value={this.state.shortUrl} />
      </div>
    );
  }
}
/*<br></br>
<TextField
  id="outlined-textarea"
  label="Multiline Placeholder"
  placeholder="Enter the Domain"
  multilinevariant="outlined"
  label="Domain"
/> */

// class answer extends Component{

//   state = {
//       shortUrl : ''
//     }

//   render() {
//     return (

//         <input placeholder="ans" value={this.state.shortUrl} />
//       )
//   }
// }

export default LinkForm;
