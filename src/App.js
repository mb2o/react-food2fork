import React, { Component } from 'react';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Single from './pages/Single';
import Default from './pages/Default';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Recipes />
        <Single />
        <Default />
      </div>
    );
  }
}

export default App;
