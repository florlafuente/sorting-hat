import React, { Component } from 'react';
import hat from './hat.png'

class Hat extends Component {
	render () {
		return (
			<div>
				<img src={hat} alt='sorting hat' />
			</div>
		);
	}
}

export default Hat;