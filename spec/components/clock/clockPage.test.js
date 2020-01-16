import React from 'react';
import Clock from '../../../src/components/clock/clockPage';
import { shallow } from 'enzyme';

test('Clock component renders the correct date', () => {
    const date1 = new Date('July 8, 2019 21:18:00');

    const component = shallow(
        <Clock time={date1}></Clock>
    );
    expect(component).toMatchSnapshot();

});