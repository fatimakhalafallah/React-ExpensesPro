import React from 'react';
import PgeNotFound from '../../components/NotFound';
import { shallow } from 'enzyme';


test('should render not found page',()=>{
    const wrapper = shallow(<PgeNotFound/>)
    expect(wrapper).toMatchSnapshot();
})