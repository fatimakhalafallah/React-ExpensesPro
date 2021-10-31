import { sortByAmount , sortByDate , setStartDate , setEndDate , setTextFilter } from '../../actions/filters'
import moment from 'moment';

test('should sort expense by date', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })

})

test('Should sort expense by amount', ()=>{
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'  
    })
})

test('Should set the start date for filter', ()=> {
    const stardate = moment(0)
    const action  = setStartDate(stardate)
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate:stardate
    })
})

test('should set the end date for filter object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate:moment(0)
    })
})


test('should set text for filter with given value', ()=>{
    const textvalue='gas'
    const action = setTextFilter(textvalue)
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:textvalue
    })
})

test('should set empty text for filter without value ', ()=> {
    const action = setTextFilter()
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    })
})
  