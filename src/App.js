import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initializeContacts } from './reducers/contactReducer';
import ContactList from './containers/contact-list/contact-list';
import ContactForm from './containers/contact-form/contact-form';
import './app.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeContacts());
  }, [dispatch]);

  return (
    <>
      <h1 className="app__header">Address Book</h1>
      <ContactForm />
      <ContactList />
    </>
  );
}

export default App;
