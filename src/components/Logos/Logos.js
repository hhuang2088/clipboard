import React from 'react';
import './Logos.css'
import google from '../../images/logo-google.png';
import ibm from '../../images/logo-ibm.png';
import microsoft from '../../images/logo-microsoft.png';
import hp from '../../images/logo-hp.png';
import vector from '../../images/logo-vector-graphics.png';

const Logos = () => {
	return(
		<div className="ui five column container grid" id="logos">
			<div className="sixteen wide mobile three wide computer column">
				<img className="ui centered image" src={google} alt="logo-google" />
			</div>
			<div className="sixteen wide mobile three wide computer column">
				<img className="ui centered image" src={ibm} alt="logo-ibm" />
			</div>
			<div className="sixteen wide mobile three wide computer column">
				<img className="ui centered image" src={microsoft} alt="logo-microsoft" />
			</div>
			<div className="sixteen wide mobile three wide computer column">
				<img className="ui centered image" src={hp} alt="logo-hp" />
			</div>
			<div className="sixteen wide mobile three wide computer column">
				<img className="ui centered image" src={vector} alt="logo-vector" />
			</div>
		</div>
	)
}

export default Logos;
