import { addExpense ,  removeExpense , editExpense} from '../../actions/expenses';

  test('should remove expense object action by given ID',()=>{
    const action = removeExpense({id:'abc22'})
    expect(action).toEqual({ 
        type:'REMOVE_EXPENSE',
        id:'abc22'
    })
  });

  
  test('Should edit the expense object',()=>{
    const action = editExpense('12dc', {note:'New note value'})
    expect(action).toEqual({
      type: 'EDIT_EXPENSE',
      id:'12dc',
      updates: {
        note: 'New note value'
      }
    })
  });


test('should setup add expense action object with provided values',()=> {
    const expenseData = {
      description : 'Rent',
      note : 'the last month rent',
      amount : 133,
      createdAt : 1000
    }
    const action  = addExpense(expenseData)
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        ...expenseData,
        id: expect.any(String)
      }
    })
});

test('should setup add expense action object with default values', () => {

  const action = addExpense()
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
          description:'',
          note:'',
          amount:0,
          createdAt:0
      }
  })
});