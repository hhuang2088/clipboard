import React from 'react';
import './Desktop.css';
import desktopImage from '../../images/image-computer.jpg';

const Desktop = () => {
	return(
		<div id="desktop-banner">
			<div className="ui basic center aligned segment" id="header-text">
				<h1 className="ui large header">Keep track of your snippets</h1>
				<p className="ui grey tiny header">
					Clipboard instantly stores any item you copy in the cloud, meaning you can access<br />
					your snippets immediately on all your devices. Our Mac and iOS apps will help you<br />
					organize everything.
				</p>
			</div>
			<div className="ui two column grid" id="desktop-grid">
				<div className="eight wide column" id="desktop-image">
					<img className="ui fluid image" src={desktopImage} alt="desktop"/>
				</div>
				<div className="seven wide column right floated" id="feature-list">
					<div className="ui basic segment">
						<h3 className="ui medium header">Quick Search</h3>
						<p className="ui grey tiny header">
							Easily search your snippets by content,<br />
							category, web address, application, and more.
						</p>
					</div>
					<div className="ui basic segment">
						<h3 className="ui medium header">iCloud Sync</h3>
						<p className="ui grey tiny header">
							Instantly saves and syncs snippets accross all<br />
							your devices.
						</p>
					</div>
					<div className="ui basic segment">
						<h3 className="ui medium header">Complete History</h3>
						<p className="ui grey tiny header">
							Retrieve any snippets from the first moment<br />
							you started using the app.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Desktop;
