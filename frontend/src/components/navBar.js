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
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    height: '30px',
    objectFit: 'contain',
  },
}));
const logo = require('../assets/images/dsc_logo.png');
export default function ButtonAppBar() {
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
            <img src={logo} className={classes.logo} alt="logo" id="logo" />
            <Typography variant="h6" className={classes.title}>
              &nbsp; DSC TIET
            </Typography>
            <Typography variant="h6" className={classes.title}>
              URL Shortener
              <Switch onClick={themeToggler} />
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}
