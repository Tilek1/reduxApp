import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import store from './store'

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider> ,
	document.getElementById('root')
)




/*import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger'

const mathReducer = (state = {
	result: 1,
	lastValues: []
} , action) => {

	switch(action.type) {
		case "ADD": 
			state = {
				...state,
				result: state.result + action.payload,
				lastValues : [...state.lastValues, action.payload]
			}
			break;
		case "SUBTRACT":
			state = {
				...state,
				result: state.result - action.payload,
				lastValues : [...state.lastValues, action.payload]
			}
			break;
		default : 
			return state;
	}
	return state
}
const userReducer = (state = {
	name: 'Max',
	age : 27
} , action) => {

	switch(action.type) {
		case "SET_NAME": 
			state = {
				...state,
				name: action.payload
			}
			break;
		case "SET_AGE":
			state = {
				...state,
				age : action.payload
			}
			break;
		default : 
			return state;
	}
	return state
}

const myLogger = (store) => (next) => (action) => {
	console.log('Logged Action: ', action);
	next(action)
}

const store = createStore( combineReducers({mathReducer, userReducer}), {}, applyMiddleware(logger));

store.subscribe(() => console.log('store updated', store.getState()))

store.dispatch({type: 'ADD', payload: 10})
store.dispatch({type: 'ADD', payload: 20})
store.dispatch({type: 'SUBTRACT', payload: 25})






*/






























/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import store from './store'





ReactDOM.render( 
		<Provider store={store}>
			<App />
		</Provider>	
	, document.getElementById('root'))

*/