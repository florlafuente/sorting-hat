import React, { Component } from 'react';
import Header from './header/component.js'
import Hat from './hat/component.js'
import HouseBadge from './house-badge/component.js'
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      sorted : false,
      house : ''
    }
  }


  //Returns a string with the House name value and sets it in the state
  gettingHouse = () => {
    const houses = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff']
    let number = this.getRandomNumber(0, 3)
    this.setState({
      house: houses[number],
      sorted: true
    })
  }

  //Generates a random number in an specific range
  getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //Reseting to initial states for a new sorting
  resetState = () => {
    this.setState({
      house: '',
      sorted: false
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        {!this.state.sorted &&
          <Hat gettingHouse={this.gettingHouse}/>
        }
        {this.state.sorted &&
          <HouseBadge 
            resetState={this.resetState}
            selectedHouse={this.state.house}/>
        }
      </div>
    );
  }
}

export default App;
