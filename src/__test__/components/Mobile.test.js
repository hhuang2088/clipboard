import React from 'react';
import { shallow } from 'enzyme';
import Mobile from '../../components/Mobile/Mobile'

const wrapper = shallow(<Mobile />);

describe('the Mobile component', () => {
	it('has two divs', () => {
		expect(wrapper.find('div').length).toEqual(2);
	});

	it('has an h2 element', () => {
		expect(wrapper.find('h2').length).toEqual(1);
	});

	it('has a p element', () => {
		expect(wrapper.find('p').length).toEqual(1);
	});

	it('has an img element', () => {
		expect(wrapper.find('img').length).toEqual(1);
	});
});
