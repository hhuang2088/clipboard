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

	it('has a Desktop component', () => {
		expect(wrapper.find('Desktop').length).toEqual(1);
	});

	it('has a Mobile component', () => {
		expect(wrapper.find('Mobile').length).toEqual(1);
	});

	it('has a Features component', () => {
		expect(wrapper.find('Features').length).toEqual(1);
	});

	it('has a Logos component', () => {
		expect(wrapper.find('Logos').length).toEqual(1);
	});

	it('has a CallToAction component', () => {
		expect(wrapper.find('CallToAction').length).toEqual(1);
	});

	it('has a Footer component', () => {
		expect(wrapper.find('Footer').length).toEqual(1);
	});
});
