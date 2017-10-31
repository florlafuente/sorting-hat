import React, { Component } from 'react';

class Header extends Component {
	render () {
		return (
			<header>
				<h1 className='cyan-text'>The sorting hat</h1>
				<p>Which Hogwarts House are you in?</p>
			</header>
		);
	}
}

export default Header;