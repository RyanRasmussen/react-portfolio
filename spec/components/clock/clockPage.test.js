import React from 'react';
import Clock from '../../../src/components/clock/clockPage';
import { shallow } from 'enzyme';
import moment from 'moment-timezone';

test('Clock component renders the correct date', () => {
    moment.tz.setDefault('MST');
    const date1 = moment('2019-07-08 09:18:00').format();

    console.log(moment(date1).toDate());

    const component = shallow(
        <Clock time={date1}></Clock>
    );
    expect(component).toMatchSnapshot();

});