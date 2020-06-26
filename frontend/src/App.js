import React from 'react';
import './App.css';
import HomeScreen from './screens/Home';
import NavBar from './components/navBar';
import Footer from './components/Footer';
const App = () => {
  return (
    <div className="App">
      <NavBar />
      <HomeScreen />
      <Footer />
    </div>
  );
};
//<span className="PoweredByDscTiet">Powered By DSC TIET</span>
export default App;
