import React from 'react';
import { shallow } from 'enzyme';
import Features from '../../components/Features/Features';

const wrapper = shallow(<Features />);

describe('the Features component', () => {
	it('has 10 div elements', () => {
		expect(wrapper.find('div').length).toEqual(10);
	});

	it('has two divs with rows', () => {
		expect(wrapper.find('.row').length).toEqual(2);
	});

	it('the first row div has a segment', () => {
		const firstRow = wrapper.find('.row').at(0);
		expect(firstRow.children().find('.segment').length).toEqual(1);
	});

	it('the segment in the first row div has an h2 element', () => {
		const firstRowSegment = wrapper.find('.row').at(0).children().find('.segment').at(0);
		expect(firstRowSegment.find('h2').length).toEqual(1);
	});

	it('the segment in the first row div has a p element', () => {
		const firstRowSegment = wrapper.find('.row').at(0).children().find('.segment').at(0);
		expect(firstRowSegment.find('p').length).toEqual(1);
	});

	it('the second row div has three columns', () => {
		const secondRow = wrapper.find('.row').at(1);
		expect(secondRow.children().find('.column').length).toEqual(3);
	});

	it('the first column has a segment', () => {
		const firstColumn = wrapper.find('.row').at(1).children().find('.column').at(0);
		expect(firstColumn.children().find('.segment').length).toEqual(1);
	});

	it('the segment in the first column has an img element', () => {
		const firstColumnSegment = wrapper.find('.row').at(1).children().find('.column').at(0).find('.segment').at(0);
		expect(firstColumnSegment.children().find('img').length).toEqual(1);
	});

	it('the segment in the first column has an h3 element', () => {
		const firstColumnSegment = wrapper.find('.row').at(1).children().find('.column').at(0).find('.segment').at(0);
		expect(firstColumnSegment.children().find('h3').length).toEqual(1);
	});

	it('the segment in the first column has a p element', () => {
		const firstColumnSegment = wrapper.find('.row').at(1).children().find('.column').at(0).find('.segment').at(0);
		expect(firstColumnSegment.children().find('p').length).toEqual(1);
	});

	it('the first column has a segment', () => {
		const firstColumn = wrapper.find('.row').at(1).children().find('.column').at(0);
		expect(firstColumn.children().find('.segment').length).toEqual(1);
	});

	it('the segment in the first column has an img element', () => {
		const firstColumnSegment = wrapper.find('.row').at(1).children().find('.column').at(0).find('.segment').at(0);
		expect(firstColumnSegment.children().find('img').length).toEqual(1);
	});

	it('the segment in the first column has an h3 element', () => {
		const firstColumnSegment = wrapper.find('.row').at(1).children().find('.column').at(0).find('.segment').at(0);
		expect(firstColumnSegment.children().find('h3').length).toEqual(1);
	});

	it('the segment in the first column has a p element', () => {
		const firstColumnSegment = wrapper.find('.row').at(1).children().find('.column').at(0).find('.segment').at(0);
		expect(firstColumnSegment.children().find('p').length).toEqual(1);
	});

	it('the second column has a segment', () => {
		const secondColumn = wrapper.find('.row').at(1).children().find('.column').at(1);
		expect(secondColumn.children().find('.segment').length).toEqual(1);
	});

	it('the segment in the second column has an img element', () => {
		const secondColumnSegment = wrapper.find('.row').at(1).children().find('.column').at(1).find('.segment').at(0);
		expect(secondColumnSegment.children().find('img').length).toEqual(1);
	});

	it('the segment in the second column has an h3 element', () => {
		const secondColumnSegment = wrapper.find('.row').at(1).children().find('.column').at(1).find('.segment').at(0);
		expect(secondColumnSegment.children().find('h3').length).toEqual(1);
	});

	it('the segment in the second column has a p element', () => {
		const secondColumnSegment = wrapper.find('.row').at(1).children().find('.column').at(1).find('.segment').at(0);
		expect(secondColumnSegment.children().find('p').length).toEqual(1);
	});
	//
	it('the third column has a segment', () => {
		const thirdColumn = wrapper.find('.row').at(1).children().find('.column').at(2);
		expect(thirdColumn.children().find('.segment').length).toEqual(1);
	});

	it('the segment in the third column has an img element', () => {
		const thirdColumnSegment = wrapper.find('.row').at(1).children().find('.column').at(2).find('.segment').at(0);
		expect(thirdColumnSegment.children().find('img').length).toEqual(1);
	});

	it('the segment in the third column has an h3 element', () => {
		const thirdColumnSegment = wrapper.find('.row').at(1).children().find('.column').at(2).find('.segment').at(0);
		expect(thirdColumnSegment.children().find('h3').length).toEqual(1);
	});

	it('the segment in the third column has a p element', () => {
		const thirdColumnSegment = wrapper.find('.row').at(1).children().find('.column').at(2).find('.segment').at(0);
		expect(thirdColumnSegment.children().find('p').length).toEqual(1);
	});
});
