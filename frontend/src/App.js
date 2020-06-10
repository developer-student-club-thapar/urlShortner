import React, { useState } from 'react';
//import LinkForm from './components/LinkForm';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/globalStyles';
import { lightTheme, darkTheme } from './components/Themes';
import Switch from '@material-ui/core/Switch';
import './App.css';
import HomeScreen from './screens/Home';

const App = () => {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="Rect4Stack">
          <div className="Rect4">
            <span className="PoweredByDscTiet">Powered By DSC TIET</span>
            <div className="Switch">
              <Switch onClick={themeToggler}>Switch Theme</Switch>
            </div>
          </div>
          <span className="UrlShortner">URL Shortner</span>
        </div>
        <HomeScreen />
      </>
    </ThemeProvider>
  );
};

export default App;
