import React from 'react';
import { connect } from 'react-redux';
import expenses from '../reducers/expenses';
import ExpenseListItems from './ExpenseListItems';
import selectExpenses from '../selectors/expenses';


export const ExpenseList = (props) => (
  <div>
  {
    props.expenses.lenght === 0 ?  (<p> No Expenses </p>)
      : 
    (
      props.expenses.map((expense)=>
      {return <ExpenseListItems key={expense.id} {...expense}/>})  
    )
  }
    <h1>Expense List :</h1>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
