import React, { Component } from 'react';
import hat from './hat.png'

class Hat extends Component {
	render () {
		return (
			<div>
				<img src={hat} alt='sorting hat' />
				<button onClick={this.props.gettingHouse} className='waves-effect waves-light btn'>
					Click me!
				</button>
			</div>
		);
	}
}

export default Hat;