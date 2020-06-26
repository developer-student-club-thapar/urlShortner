import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Switch } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalStyles';
import { lightTheme, darkTheme } from './Themes';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(5),
  },
  logo: {
    marginLeft: theme.spacing(15),
    height: '30px',
    objectFit: 'contain',
    cursor: 'pointer',
  },
}));
const logo = require('../assets/images/dsc_logo.png');
export default function NavBar() {
  const classes = useStyles();
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className={classes.root}>
        <AppBar
          position="fixed"
          color="inherit"
          style={{ backgroundColor: 'inherit' }}
          className="fill"
        >
          <Toolbar>
            <img
              src={logo}
              className={classes.logo}
              alt="logo"
              id="logo"
              onClick={() => {
                window.open('https://dsctiet.tech/');
              }}
            />
            <Typography
              variant="h7"
              className={classes.title}
              onClick={() => {
                window.open('https://dsctiet.tech/');
              }}
            >
              {' '}
              &nbsp; DSC TIET
            </Typography>
            <Typography variant="h6" className={classes.title}>
              URL Shortener
              <Switch onClick={themeToggler} color="primary" />
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}
