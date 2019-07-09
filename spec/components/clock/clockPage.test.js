import React from 'react';
import Clock from '../../../src/components/clock/clockPage';
import renderer from 'react-test-renderer';

test('Clock component renders the correct date', () => {
    const date1 = new Date('July 8, 2019 21:18:00');

    const component = renderer.create(
        <Clock time={date1}></Clock>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();


});