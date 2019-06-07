import React from 'react';
import Header from './Header/Header';
import Desktop from './Desktop/Desktop';
import Mobile from './Mobile/Mobile';
import Features from './Features/Features';
import Logos from './Logos/Logos';
import CallToAction from './CallToAction/CallToAction';
import Footer from './Footer/Footer';

class App extends React.Component {
	render() {
		return(
			<div>
				<Header />
				<Desktop />
				<Mobile />
				<Features />
				<Logos />
				<CallToAction />
				<Footer />
			</div>
		)
	};
};

export default App;
