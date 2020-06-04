import React, { Component } from 'react';
//import LinkForm from './components/LinkForm';
import { Router, Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/Home';

const App = () => {
  return (
    <div className="url-space">
      <HomeScreen />
    </div>
  );
};

export default App;
