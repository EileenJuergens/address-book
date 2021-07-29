import React from 'react';
import ContactList from './containers/contact-list/contact-list';
import ContactForm from './containers/contact-form/contact-form';
import './app.css';

function App() {
  return (
    <>
      <h1 className="app__header">Address Book</h1>
      <ContactForm />
      <ContactList />
    </>
  );
}

export default App;
