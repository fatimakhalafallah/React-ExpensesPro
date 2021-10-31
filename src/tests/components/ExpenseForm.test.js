import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import { experiments } from 'webpack';
import moment from 'moment';


test('should render expenseForm correctly',()=>{
    const wrapper = shallow(<ExpenseForm/>)
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with expense data',()=>{
    const wrapper = shallow(<ExpenseForm expense = {expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission' ,()=>{
    
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit',{ // here we simulate the submit event
        preventDefault : ()=>{}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();

});

test('should test the description on input change',()=>{
    
    const wrapper = shallow(<ExpenseForm/>)
    const value = 'new description'
    wrapper.find('input').at(0).simulate('change',{  // here we simulate on change event for the description
        target: {value} // at(0) causer we have many input
    });
    expect(wrapper.state('description')).toBe(value);
    expect(wrapper).toMatchSnapshot();

});

test('should test the note on textarea change',()=>{
    const wrapper = shallow(<ExpenseForm/>);
    const value = 'note change correctly';
    wrapper.find('textarea').simulate('change',{
        target:{value}
    });
    expect(wrapper.state('note')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('shoult test valid input amount',()=>{

    const wrapper = shallow(<ExpenseForm/>)
    const value = '12.25';
    wrapper.find('input').at(1).simulate('change',{
        target: {value}
    });
    expect(wrapper.state('amount')).toBe(value);
    expect(wrapper).toMatchSnapshot();

});

test('should test invalid input amount',()=>{
    
    const wrapper = shallow(<ExpenseForm/>);
    const value = '12.1233'
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('amount')).toBe('');

});

test('should called on Submit props with vaild form submission',()=>{

    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}  onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit',{
        preventDefault : ()=>{}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:expenses[0].description,
        amount:expenses[0].amount ,
        createdAt :expenses[0].createdAt,
        note :expenses[0].note
    });
    
});

test('should set date for datechange',()=>{
    const now = moment();
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});


test('should set the focus calender on change',()=>{
    const focused = true;
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
    expect(wrapper.state('calendarFocused')).toBe(focused);
});

