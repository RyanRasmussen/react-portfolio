import React from 'react';
import Clock from '../../../src/components/clock/clockPage';
import { shallow } from 'enzyme';
import moment from 'moment-timezone';

describe('Clock component', () => {
    moment.tz.setDefault('MST');
    const date1 = moment('2019-07-08 09:18:00').format();
    let component;

    beforeEach(() => {
        component = shallow(
            <Clock time={date1}></Clock>
        );  
    })
    
    it('renders correctly', () => {
        expect(component).toMatchSnapshot();
    })

    it('renders only the "Start" button on page load', () => {
        expect(component.find('[label="Start"]')).toHaveLength(1);
        expect(component.find('[label="Resume"]')).toHaveLength(0);
        expect(component.find('[label="Stop"]')).toHaveLength(0);
        expect(component.find('[label="Reset"]')).toHaveLength(0);
    })

    describe('Timer behavior', () => {
        it('clicking start buttons runs startTimer', () => {
            const spyTimer = jest.spyOn(Clock.prototype, 'startTimer');
            component = shallow(<Clock time={date1}></Clock>);  
            component.find('[label="Start"]').simulate('click');
            component.update();
            expect(spyTimer).toHaveBeenCalled();
            expect(spyTimer).toHaveBeenCalledTimes(1);
        })

        it('hides the Start button on click', () => {
            // Need to figure this one out
        })

        it('advances the timer by set amount of time when ran for same amount of time', () => {
            /**
             * Also need to work this one out. This is tricky because we're not using
             * a *real* timer in the React/Jest sense, but we're simulating the march
             * of time in our own function.
             */
        })
    })

    describe('datepicker', () => {
        it('clicking the date triggers handleChange function', () => {
            // Should just need a simple spyOn function here
        })
        it('properly calculates a time diff based on the test date', () => {
            // Test picks a date and should return the correct amount in the prop
        })
    })
});