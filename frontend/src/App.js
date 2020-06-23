import React, { useState } from 'react';
import './App.css';
import HomeScreen from './screens/Home';
import ButtonAppBar from './components/navBar';

const App = () => {
  return (
    <div className="App">
      <ButtonAppBar />
      <HomeScreen />
    </div>
  );
};
//<span className="PoweredByDscTiet">Powered By DSC TIET</span>
export default App;
