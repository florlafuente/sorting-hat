import React, { Component } from 'react';

  const houseData = [
    {
      //badge: '',
      name: 'Gryffindor',
      traits: 'bravery, nerve, chivalry, courage, daring',
      foundator: 'Godric Gryffindor',
      members: 'Harry Potter, Ron Weasley, Hermione Granger, Albus Dumbledor and Sirius Black.'
    },
    {
      //badge: '',
      name: 'Slytherin',
      traits: 'resourcelfulnnes, cunning, ambition, determination, self-preservation.',
      foundator: 'Salazar Slytherin',
      members: 'Tom Riddle, Severus Snape, Bellatrix Lestrange, Draco Malfoy and Albus Severus Potter.'
    },
    {
      //badge: '',
      name: 'Ravenclaw',
      traits: 'intelligence, wit, wisdom, creativity, originality, individuality, acceptance.',
      foundator: 'Rowena Ravenclaw',
      members: 'Luna Lovegood, Sybil Trelawney, Gilderoy Lockhart, Filius Flitwick and Cho Chang.'
    },
    {
      //badge: '',
      name: 'Hufflepuff',
      traits: 'dedication, hard work, fair play, patience, kindness, tolerance, unafraid of toil, loyalty.',
      foundator: 'Helga Hufflepuff',
      members: 'Nymphadora Tonks, Cedric Diggory, Pomona Sprout, Newton Scamander and Teddy Lupin.'
    }
  ]


class HouseBadge extends Component {
  constructor(props) {
    super(props)
    this.state = {
      traits: '',
      foundator: '',
      members: ''
    }
  }
  componentWillMount () {
   const currentHouse = this.gettingHouse()
   this.setState({
    traits: currentHouse.traits,
    foundator: currentHouse.foundator,
    members: currentHouse.members
   })
  }

  gettingHouse = () => {
    let house = houseData.filter(v=> v.name === this.props.selectedHouse)
    return house[0]
  }

	render () {
		return (
			<div>
				<h3>Your House is..</h3>
				<h2>{this.props.selectedHouse}</h2>
        <div>
          <p>The foundator of your house was {this.state.foundator}</p>
          <p>The traits of the House members are {this.state.traits}</p>
          <p>Some of the most famous members are {this.state.members}</p>
        </div>
				<button onClick={this.props.resetState} className='waves-effect waves-light btn'>
					{'< Go back'}
				</button>
			</div>
		);
	}
}

export default HouseBadge;