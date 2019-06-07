import React from 'react';
import { shallow } from 'enzyme';
import Desktop from '../../components/Desktop/Desktop';

const wrapper = shallow(<Desktop />);

describe('the Desktop component', () => {
	it('has eight divs', () => {
		expect(wrapper.find('div').length).toEqual(8);
	});

	it('the div with header-text id has an h1 element', () => {
		expect(wrapper.find('#header-text').find('h1').length).toEqual(1);
	});

	it('the div with header-text id has a p element', () => {
		expect(wrapper.find('#header-text').find('p').length).toEqual(1);
	});

	it('the div with desktop-grid id has two column divs', () => {
		expect(wrapper.find('#desktop-grid').children().find('.column').length).toEqual(2);
	});

	it('the first column div has an img element', () => {
		const firstColumn = wrapper.find('#desktop-grid').children().find('.column').at(0);
		expect(firstColumn.find('img').length).toEqual(1);
	});

	it('the second column div has three segment', () => {
		const secondColumn = wrapper.find('#desktop-grid').children().find('.column').at(1);
		expect(secondColumn.find('.segment').length).toEqual(3);
	});
});
