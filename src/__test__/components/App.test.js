import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';

const wrapper = shallow(<App />)

describe('the App component', () => {
	it('had a div', () => {
		expect(wrapper.find('div').length).toEqual(1);
	});

	it('has a Header component', () => {
		expect(wrapper.find('Header').length).toEqual(1);
	});
});
