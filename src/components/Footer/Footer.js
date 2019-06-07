import React from 'react';
import './Footer.css'
import logo from '../../images/logo.svg';

const Footer = () => {
	return(
		<div id="footer">
			<div className="ui middle aligned column grid container">
				<div className="sixteen wide mobile three wide computer column">
					<img className="ui mini image" src={logo} alt="logo" />
				</div>
				<div className="sixteen wide mobile three wide computer column">
					<div className="ui basic segment">
						<p><a className="ui tiny grey header" href="#">FAQs</a></p>
						<p><a className="ui tiny grey header" href="#">Contact Us</a></p>
					</div>
				</div>
				<div className="sixteen wide mobile three wide computer column">
					<div className="ui basic segment">
						<p><a className="ui tiny grey header" href="#">Privacy Policy</a></p>
						<p><a className="ui tiny grey header" href="#">Press Kit</a></p>
					</div>
				</div>
				<div className="sixteen wide mobile three wide computer column">
					<div className="ui basic segment">
						<p><a className="ui tiny grey header" href="#">Install Guide</a></p>
					</div>
				</div>
				<div className="sixteen wide mobile three wide computer column">
					<div className="ui basic segment">
						<a className="ui tiny grey header" href="#">
							<i className="facebook icon" />
						</a>
						<a className="ui tiny grey header" href="#">
							<i className="twitter icon" />
						</a>
						<a className="ui tiny grey header" href="#">
							<i className="instagram icon" />
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer;
