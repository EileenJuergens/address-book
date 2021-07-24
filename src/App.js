import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ContactList from "./contact-list";
import { initializeContacts } from './reducers/contactReducer'


function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(initializeContacts())
	}, [dispatch])

	return (
		<div className="App">
			<h1>Address Book</h1>
			<ContactList />
		</div>
	);
}

export default App;
