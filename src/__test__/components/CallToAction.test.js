import React from 'react';
import { shallow } from 'enzyme';
import CallToAction from '../../components/CallToAction/CallToAction';

const wrapper = shallow(<CallToAction />);

describe('the CallToAction component', () => {
	it('has a div', () => {
		expect(wrapper.find('div').length).toEqual(1);
	});

	it('has a h2 element', () => {
		expect(wrapper.find('h2').length).toEqual(1);
	});

	it('has a p element', () => {
		expect(wrapper.find('p').length).toEqual(1);
	});

	it('has two button element', () => {
		expect(wrapper.find('button').length).toEqual(2);
	});
});
