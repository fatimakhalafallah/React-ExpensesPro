import {createStore} from 'redux';


const incrementCount = ({incrementBy=1}={})=>({
    type:'INCREMENT',
    incrementBy : typeof incrementBy === 'number' ? incrementBy:1
});


const decrementCount = ({decrementBy=1}={})=>({
    type:'DECREMENT',
    decrementBy:  typeof decrementBy === 'number'? decrementBy : 1
});

const resetCount=()=>({
    type:'RESET'
});

const setCount=({count})=>({
    type:'SET',
    count:101
});



const store = createStore(( state={count:0} , action)=>{

    switch(action.type){
        case('INCREMENT'):
            return{
                count:state.count+action.incrementBy
            };    
        case('DECREMENT'):
            return{
                count:state.count-action.decrementBy
            }

        case('SET'):
            return{
                count:action.count
            }
         
        case('RESET'):
            return{
                count:0
            }    
        default:
            return state;
    }
    
});

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
});


store.dispatch(incrementCount({incrementBy:5}));

store.dispatch(resetCount());

store.dispatch(decrementCount({decrementBy:10}));

store.dispatch(setCount({count:101}));

