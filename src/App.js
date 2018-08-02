import '../node_modules/materialize-css/dist/css/materialize.css';
import '../node_modules/materialize-css/dist/js/materialize.js';

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewsPanel from './NewsPanel/NewsPanel.js'

class App extends Component {
  render() {
    return (
      <div>
        {/* <img className='logo' src={logo} alt='logo'/> */}
        <div className='container'>
           <NewsPanel />
        </div>
      </div>
    );
  }
}

export default App;
