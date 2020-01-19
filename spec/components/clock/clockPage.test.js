import React from 'react';
import Clock from '../../../src/components/clock/clockPage';
import { shallow } from 'enzyme';
import moment from 'moment-timezone';

test('Clock component renders the correct date', () => {
    const date1 = moment.tz('2019-07-08 21:18:00', 'America/Denver').format();

    console.log(moment(date1).toDate());

    const component = shallow(
        <Clock time={date1}></Clock>
    );
    expect(component).toMatchSnapshot();

});