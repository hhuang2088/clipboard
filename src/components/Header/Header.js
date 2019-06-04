import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';

const Header = () => {
	return(
		<div id="header">
			<div className="ui basic center aligned segment">
				<div id="logo">
					<img className="ui centered image" src={logo} />
				</div>
				<div id="text">
					<h1 className="ui huge header">A history of everything you copy</h1>
					<p className="ui grey header">
						Clipboard allws you to track and organize everything you copy. Instantly<br />
						access your clipboard on all your devices.
					</p>
				</div>
				<div id="buttons">
					<button className="ui teal button">Download for iOS</button>
					<button className="ui violet button">Download for Mac</button>
				</div>
			</div>
		</div>
	)
};

export default Header;
