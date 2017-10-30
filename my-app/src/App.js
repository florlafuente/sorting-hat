import React, { Component } from 'react';
import Header from './header/component.js'
import Hat from './hat/component.js'
import './App.css';

class App extends Component {

  //Returns a string with the House name value
  gettingHouse = () => {
    const houses = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff']
    let number = this.getRandomNumber(0, 3)
    return houses[number]
  }


  //Generates a random number in an specific range
  getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Hat gettingHouse={this.gettingHouse}/>
      </div>
    );
  }
}

export default App;
