import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import backgroundDesktop from '../../images/bg-header-desktop.png';
import backgroundMobile from '../../images/bg-header-mobile.png';

class Header extends React.Component {
	state = {
		width: 0,
		height: 0,
		background: undefined
	};

	componentDidMount() {
		this.updateWindowDimensions();
  	window.addEventListener('resize', this.updateWindowDimensions);
	};

	componentWillUnmount() {
  	window.removeEventListener('resize', this.updateWindowDimensions);
	};

	updateWindowDimensions = () => {
  	this.setState({ width: window.innerWidth, height: window.innerHeight });
		if(this.state.width > 750 && this.state.background !== backgroundDesktop) {
			this.setState({ background: backgroundDesktop });
		} else if(this.state.width <= 750 && this.state.background !== backgroundMobile){
			this.setState({ background: backgroundMobile });
		};
	};

	render() {
		return(
			<div id="header" style={{ backgroundImage: `url(${this.state.background})` }}>
				<div className="ui basic center aligned segment">
					<div id="logo">
						<img className="ui centered image" src={logo} alt="logo"/>
					</div>
					<div id="text">
						<h1 className="ui huge header">A history of everything you copy</h1>
						<p className="ui grey tiny header">
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
	}
};

export default Header;
