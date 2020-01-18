import React from 'react';
import TextTransform from '../../../src/components/text/textTransform';
import { shallow } from 'enzyme';

describe('Text transform component', () => {
    const wrapper = shallow(<TextTransform />);
    const debug = wrapper.debug();

    //console.log(debug);

    const testMe = wrapper.find('ActionButton');

    it('should have three buttons', () => {
        expect(testMe).toHaveLength(3);
    })

    it('Button should be of type button', () => {
        testMe.forEach(btn => {
            console.log(btn.label);
        })
    })
})