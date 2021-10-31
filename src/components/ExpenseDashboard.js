import React from 'react';
import  ExpenseList  from './ExpenseList';
import ExpenseFilter from './ExpenseListFilters';

const ExpenseDashboardPAge =()=>(
    <div>
        <p> This is the dashboard page</p>
        <ExpenseFilter/>
        <ExpenseList/>
    </div>
);


export default ExpenseDashboardPAge;
