import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header/Header';

const wrapper = shallow(<Header />);

describe('the Header component', () => {
	it('has five divs', () => {
		expect(wrapper.find('div').length).toEqual(5);
	});

	it('the logo div has an img element', () => {
		expect(wrapper.find('#logo').find('img').length).toEqual(1);
	});

	it('the div with id text has an h1 element', () => {
		expect(wrapper.find('#text').find('h1').length).toEqual(1);
	});

	it('the div with id text has an p element', () => {
		expect(wrapper.find('#text').find('p').length).toEqual(1);
	});

	it('the div with logo buttons has two buttons', () => {
		expect(wrapper.find('#buttons').children().find('button').length).toEqual(2);
	});
});
