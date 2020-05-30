import React, { Component } from 'react';
//import Link from './Link';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core';
import './LinkForm.css';

const classes = makeStyles((theme) => ({
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
    render() {
        return (
            <div className={ classes.root }>

            <form noValidate autoComplete="off">
            <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Enter the URL"
          multilinevariant="outlined"
          label="URL"
        />


            </form>
            <div><Button variant="contained" color="primary" className={ classes.button }> Submit </Button> </div>
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
export default LinkForm;