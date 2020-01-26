import React from 'react';
import Clock from '../../../src/components/clock/clockPage';
import { shallow } from 'enzyme';
import moment from 'moment-timezone';

describe('Clock component', () => {
    moment.tz.setDefault('MST');
    const date1 = moment('2019-07-08 09:18:00').format();

    const component = shallow(
        <Clock time={date1}></Clock>
    );
    it('renders correctly', () => {
        expect(component).toMatchSnapshot();
    })
});