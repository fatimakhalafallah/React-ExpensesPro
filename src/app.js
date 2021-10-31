import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import AppRouter from './routers/AppRouter';
import './styles/style.scss';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses  from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';
// add two expenser add text  , visible display

const store = configureStore();
// we arge goning to use rreal database
// store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
// store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

// setTimeout(() => {
//     store.dispatch(setTextFilter('rent'));
//   }, 3000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


const jsx = (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
  
ReactDOM.render(jsx, document.getElementById('app'));
  