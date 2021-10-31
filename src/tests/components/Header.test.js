//yarn add react-test-renderer@16.0.0
import { shallow } from 'enzyme';
import Header from '../../components/Header';
import React from 'react';


test('Should render the header correcty',()=>{
    const wrapper = shallow(<Header/>);
     expect(wrapper).toMatchSnapshot()
     // to jsaon goning to extract the meangful things of wrapper
});

