import React from 'react';
import {shallow} from 'enzyme';
import {AddExpensePage} from '../../components/CreatePage';
import expenses from '../fixtures/expenses';

let addExpense , history , wrapper;

beforeEach(() => {
    addExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
  });


test('should render Add expense correctly',()=>{

  expect(wrapper).toMatchSnapshot();
});

test('should render the onsubmit',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenCalledWith('/');
    expect(addExpense).toHaveBeenCalledWith(expenses[1]);
});