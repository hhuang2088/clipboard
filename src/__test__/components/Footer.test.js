import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer/Footer';

const wrapper = shallow(<Footer />);

describe('the Footer component', () => {
	it('has 11 divs', () => {
		expect(wrapper.find('div').length).toEqual(11);
	});

	it('has a div with grid class', () => {
		expect(wrapper.find('.grid').length).toEqual(1);
	});

	it('the grid div contains five columns', () => {
		const grid = wrapper.find('.grid').at(0);
		expect(grid.children().find('.column').length).toEqual(5);
	});

	it('the first column of the grid div contains an img element', () => {
		const firstColumn = wrapper.find('.grid').at(0).find('.column').at(0);
		expect(firstColumn.children().find('img').length).toEqual(1);
	});

	it('the second column of the grid div contains two p elements', () => {
		const secondColumn = wrapper.find('.grid').at(0).children().find('.column').at(1);
		expect(secondColumn.children().find('p').length).toEqual(2);
	});

	it('the third column of the grid div contains two p elements', () => {
		const thirdColumn = wrapper.find('.grid').at(0).children().find('.column').at(2);
		expect(thirdColumn.children().find('p').length).toEqual(2);
	});

	it('the fourth column of the grid div contains two p elements', () => {
		const fourthColumn = wrapper.find('.grid').at(0).children().find('.column').at(3);
		expect(fourthColumn.children().find('p').length).toEqual(1);
	});

	it('the fifth column of the grid div contains three a elements', () => {
		const fifthColumn = wrapper.find('.grid').at(0).children().find('.column').at(4);
		expect(fifthColumn.children().find('a').length).toEqual(3);
	});
});
