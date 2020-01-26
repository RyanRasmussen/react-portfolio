import React from 'react';
import TextTransform from '../../../src/components/text/textTransform';
import { shallow } from 'enzyme';

describe('Text transform component', () => {
    const wrapper = shallow(<TextTransform />);
    const testText = 'lorem ipsum whispers cat';

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('renders three buttons', () => {
        const testMe = wrapper.find('ActionButton');
        expect(testMe).toHaveLength(3);
    })

    it('accepts text in the textarea field', () => {
        wrapper.find('textarea').simulate('change', {
            target: { value: testText }
        });

        expect(wrapper.find('textarea').props().value).toEqual(testText);
    })

    describe('Capitalize feature', () => {
        it('renders a "Capitalize" button', () => {
            expect(wrapper.find('[label="Capitalize"]')).toHaveLength(1);
        })

        it('successfully capitalizes the text', () => {
            const capText = 'Lorem Ipsum Whispers Cat';
            wrapper.find('textarea').simulate('change', {
                target: { value: testText }
            });

            wrapper.find('[label="Capitalize"]').simulate('click');
            expect(wrapper.find('textarea').props().value).toEqual(capText);
        })
        it('accounts for apostrophes in the text', () => {
            const testApoText = "lorem ipsum whispers cat's tango foxtrot";
            const apoTransformed = "Lorem Ipsum Whispers Cat's Tango Foxtrot"
            wrapper.find('textarea').simulate('change', {
                target: { value: testApoText }
            });

            wrapper.find('[label="Capitalize"]').simulate('click');
            expect(wrapper.find('textarea').props().value).toEqual(apoTransformed);
        })
    })

    describe('Lowercase feature', () => {
        it('renders a "Lowercase" button', () => {
            expect(wrapper.find('[label="Lowercase"]')).toHaveLength(1);
        })
        it('successfully lowercases the text', () => {
            const lowText = 'lorem ipsum whispers cat';
            wrapper.find('textarea').simulate('change', {
                target: { value: testText }
            });

            wrapper.find('[label="Lowercase"]').simulate('click');
            expect(wrapper.find('textarea').props().value).toEqual(lowText);
        })
    })

    describe('Uppercase feature', () => {
        it('renders an "Uppercase" button', () => {
            expect(wrapper.find('[label="Uppercase"]')).toHaveLength(1);
        })
        it('successfully uppercases the text', () => {
            const upText = 'LOREM IPSUM WHISPERS CAT';
            wrapper.find('textarea').simulate('change', {
                target: { value: testText }
            });

            wrapper.find('[label="Uppercase"]').simulate('click');
            expect(wrapper.find('textarea').props().value).toEqual(upText);
        })
    })
})