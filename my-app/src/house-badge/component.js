import React, { Component } from 'react';

class HouseBadge extends Component {
	render () {
		return (
			<div>
				<h3>Your House is..</h3>
				<h2>{this.props.selectedHouse}</h2>
				<button onClick={this.props.resetState}>
					{'< Go back'}
				</button>
			</div>
		);
	}
}

export default HouseBadge;