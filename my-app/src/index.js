// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import {createStore, combineReducers} from 'redux';

const reducerMath = (state = initialSateMath, action) => {
    switch (action.type){
        case "ADD":
            state = {
                // Copy all attr and then change firstVal
                ...state,
                firstVal: state.firstVal + action.payload,
                myArr: [...state.myArr, action.payload]
            }

            break;
        case "SUBTRACT":
            state.secondVal -= action.payload;
            state.myArr = [state.myArr, action.payload];
            break;
    }
    return state;
};

const initialSateMath = {
    firstVal : 10,
    secondVal : 15,
    myArr: []
}


const reducerString = (state = initialSateMath, action) => {
    switch (action.type){
        case "CHANGE_NAME":
            state = {
                ...state,
                firstName: action.payload,
            }

            break;
        case "CHANGE_SURNAME":
            state.surname = action.payload;
            break;
    }
    return state;
};

const initialSateString = {
    firstName: 'Sami',
    surname: 'Saleh'
}

const store = createStore(combineReducers({reducerMath, reducerString}));

store.subscribe(() => {
    console.log('store updated!', store.getState());
});

// Change the store value from the first reducer
store.dispatch({
   type: "ADD",
   payload: 10
});

store.dispatch({
    type: "SUBTRACT",
    payload: 5
});


//Change the store value form the second reducer
// You should avoid reuse the same Action name
store.dispatch({
    type: "CHANGE_NAME",
    payload: 'David'
});

store.dispatch({
    type: "CHANGE_SURNAME",
    payload: 'Migule'
});