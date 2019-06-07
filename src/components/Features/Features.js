import React from 'react';
import './Features.css';
import blacklist from '../../images/icon-blacklist.svg';
import text from '../../images/icon-text.svg';
import preview from '../../images/icon-preview.svg';

const Features = () => {
	return(
		<div className="ui three column grid container">
			<div className="centered row">
				<div className="center aligned basic segment">
					<h2 className="ui center aligned header">Supercharge your workflow</h2>
					<p className="ui tiny grey center aligned header">
						We've got the tools to boost your productivity
					</p>
				</div>
			</div>
			<div className="row">
				<div className="column">
					<div className="ui center aligned basic segment">
						<img className="ui centered mini image" src={blacklist} alt="create blacklist" />
						<h3 className="ui header">Create Blacklists</h3>
						<p className="ui tiny grey header">
							Ensure sensitive information never makes its<br />
							way to your clipboard by excluding certain<br />
							sources.
						</p>
					</div>
				</div>
				<div className="column">
					<div className="ui center aligned basic segment">
						<img className="ui centered mini image" src={text} alt="plain text snippets" />
						<h3 className="ui header">Plain text snippets</h3>
						<p className="ui tiny grey header">
						Remove unwanted formatting from copied text<br />
						for a consistent look.
						</p>
					</div>
				</div>
				<div className="column">
					<div className="ui center aligned basic segment">
						<img className="ui centered mini image" src={preview} alt="sneak preview" />
						<h3 className="ui header">Sneak preview</h3>
						<p className="ui tiny grey header">
							Quick preview of all snippets on your Clipboard<br />
							for easy access.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Features;
