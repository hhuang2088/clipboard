import React from 'react';
import Header from './Header/Header';
import Desktop from './Desktop/Desktop';

class App extends React.Component {
	render() {
		return(
			<div>
				<Header />
				<Desktop />
			</div>
		)
	};
};

export default App;
