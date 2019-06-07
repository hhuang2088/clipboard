import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
	return(
		<div className="ui basic center aligned segment" id="call-to-action">
			<h2 className="ui header">Clipboard for iOS and Mac OS</h2>
			<p className="ui tiny grey header">
				Available for free on the App Store. Download for Mac or iOS, sync with iCloud and<br />
				you're ready to start adding to your clipboard.
			</p>
			<button className="ui teal button">Download for iOS</button>
			<button className="ui purple button">Download for Mac</button>
		</div>
	)
};

export default CallToAction;
