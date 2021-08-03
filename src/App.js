import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import {Navbar, Footer} from './components';
import Routes from './routes/routes';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes/>
      <Footer/>
    </Router>
  );
}

export default App;