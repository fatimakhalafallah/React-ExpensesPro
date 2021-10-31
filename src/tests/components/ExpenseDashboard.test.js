import React from 'react';
import ExpenseDashboard from '../../components/ExpenseDashboard';
import { shallow } from 'enzyme';

test('should render dashboard',()=>{

    const wrapper = shallow(< ExpenseDashboard/>)
    expect(wrapper).toMatchSnapshot();
})