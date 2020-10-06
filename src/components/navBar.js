import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GitHubRibbon from 'react-github-ribbons';
import { Switch } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalStyles';
import { lightTheme, darkTheme } from './Themes';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: 'inherit',
    backgroundColor: 'inherit',
  },
  title: {
    flex: 1,
    flexGrow: 1,
    display: 'flex',
  },
  titleCenter: {
    display: 'flex',
    flex: '1 1 0',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
  },
  logo: {
    height: '30px',
    objectFit: 'contain',
    cursor: 'pointer',
  },
  toggle: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
  },
}));
const logo = require('../assets/images/dsc_logo.png');
export default function NavBar() {
  const classes = useStyles();
  const [theme, setTheme] = useState(
    localStorage.getItem('selected-theme') === 'dark' ? 'dark' : 'light',
  );
  const themeToggler = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('selected-theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('selected-theme', 'light');
    }
  };

  useEffect(() => {
    let darkVal = localStorage.getItem('selected-theme');
    if (darkVal) {
      setTheme(darkVal);
    } else {
      setTheme('light');
      localStorage.setItem('selected-theme', 'light');
    }
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className={classes.root}>
        <AppBar
          position="fixed"
          color="inherit"
          style={{ backgroundColor: 'inherit' }}
          className="fill"
          id="navbar"
        >
          <Container fixed>
            <div>
              <GitHubRibbon href="https://github.com/developer-student-club-thapar/urlShortner" />
            </div>
            <Toolbar>
              <Box className={classes.title}>
                <img
                  src={logo}
                  className={classes.logo}
                  alt="logo"
                  id="logo"
                  onClick={() => {
                    window.open('https://dsctiet.tech/');
                  }}
                />
                <Hidden smDown>
                  <Typography
                    variant="h6"
                    id="dsc"
                    onClick={() => {
                      window.open('https://dsctiet.tech/');
                    }}
                  >
                    {' '}
                    &nbsp; DSC TIET
                  </Typography>
                </Hidden>
              </Box>
              <Box className={classes.titleCenter}>
                <Typography variant="h6" id="url">
                  URL Shortener
                </Typography>
              </Box>
              <Box className={classes.toggle}>
                <Switch onClick={themeToggler} color="secondary" />
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}
