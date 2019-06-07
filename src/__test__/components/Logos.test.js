import React from 'react';
import { shallow } from 'enzyme';
import Logos from '../../components/Logos/Logos';

const wrapper = shallow(<Logos />);

describe('the Logos component', () => {
	it('has six divs', () => {
		expect(wrapper.find('div').length).toEqual(6);
	});

	it('the grid div has five column divs', () => {
		expect(wrapper.find('.grid').children().find('.column').length).toEqual(5);
	});

	it('the grid div has five column divs', () => {
		expect(wrapper.find('.grid').children().find('.column').length).toEqual(5);
	});

	it('the first column div', () => {
		const firstColumn = wrapper.find('.grid').children().find('.column').at(0);
		expect(firstColumn.find('img').length).toEqual(1);
	});

	it('the second column div', () => {
		const secondColumn = wrapper.find('.grid').children().find('.column').at(1);
		expect(secondColumn.find('img').length).toEqual(1);
	});

	it('the third column div', () => {
		const thirdColumn = wrapper.find('.grid').children().find('.column').at(2);
		expect(thirdColumn.find('img').length).toEqual(1);
	});

	it('the fourth column div', () => {
		const fourthColumn = wrapper.find('.grid').children().find('.column').at(3);
		expect(fourthColumn.find('img').length).toEqual(1);
	});

	it('the five column div', () => {
		const fiveColumn = wrapper.find('.grid').children().find('.column').at(4);
		expect(fiveColumn.find('img').length).toEqual(1);
	});
});
