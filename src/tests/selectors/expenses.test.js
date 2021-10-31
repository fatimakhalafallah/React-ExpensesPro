import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';


  test('should filter by text value', () => {
     const filter = {
        text:'e' ,
        sortBy:'date' ,
        startDate: undefined ,
        endDate:undefined
     }
     const action = selectExpenses(expenses,filter)
     expect(action).toEqual([ expenses[2] , expenses[1] ])

  });


test('should filter by startDate', () =>{
    const filter = {
        text:'' ,
        sortBy:'date' ,
        startDate: moment(0) ,
        endDate:undefined
     }

      const action = selectExpenses(expenses,filter)
      expect(action).toEqual([ expenses[2] , expenses[0]])
})  

test('should filter by end date',() =>{

    const filter = {
        text:'' ,
        sortBy:'date' ,
        startDate: undefined,
        endDate:moment(0).add(2, 'days')
     }
    const action = selectExpenses(expenses,filter)
    expect(action).toEqual([ expenses[0] , expenses[1]  ])
})


test('should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
      };
    const action = selectExpenses(expenses , filters)
    expect(action).toEqual([expenses[1] , expenses[2] , expenses[0]])

})
  