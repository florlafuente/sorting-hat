import React, { Component } from 'react';
import Header from './header/component.js'
import Hat from './hat/component.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hat />
      </div>
    );
  }
}

export default App;
