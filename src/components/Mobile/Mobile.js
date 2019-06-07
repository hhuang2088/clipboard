import React from 'react';
import './Mobile.css';
import desktopBanner from '../../images/image-devices.jpg';

const Mobile = () => {
	return(
		<div id="mobile-banner">
			<div className="ui center aligned basic segment">
				<h2 className="ui large header">Access Clipboard Anywhere</h2>
				<p className="ui grey tiny header">
					Whether you're on the go, or at your computer, you can access all your Clipboard<br />
					snippets in a few simple clicks.
				</p>
			</div>
			<img className="ui centered image" src={desktopBanner} alt="banner"/>
		</div>
	);
};

export default Mobile;
