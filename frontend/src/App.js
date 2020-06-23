import React, { useState } from 'react';
//import LinkForm from './components/LinkForm';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/globalStyles';
import { lightTheme, darkTheme } from './components/Themes';
import './App.css';
import HomeScreen from './screens/Home';
import ButtonAppBar from './components/navBar';

const App = () => {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ButtonAppBar />
      <HomeScreen />
    </ThemeProvider>
  );
};
//<span className="PoweredByDscTiet">Powered By DSC TIET</span>
export default App;
