import React from 'react';
import {removeExpense} from '../actions/expenses';
import {Link}  from 'react-router-dom';


export const ExpenseListItems = ({ description , amount  , createdAt , id})=>(
    <div>
         <Link to={`edit/${id}`} >  
              <h3>{description}</h3>
         </Link> 
        <p>{amount} - {createdAt}</p>
      
    </div>
);



export default ExpenseListItems;

