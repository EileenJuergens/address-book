import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initializeContacts } from './reducers/contactReducer';
import ContactList from './contact-list';
import ContactForm from './contact-form';
import './app.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeContacts());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Address Book</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
}

export default App;
