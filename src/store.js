import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as formReducer } from "redux-form";

import contactReducer from './reducers/contactReducer'

const reducer = combineReducers({
	form: formReducer,
	contacts: contactReducer,
})

const store = createStore(
	reducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	))

export default store;