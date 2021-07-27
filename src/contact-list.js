import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ContactCard from './contact-card';
import Filter from './filter';
import { sortData } from './helpers';
import './contact-list.css';

const ContactList = () => {
  const [isSortOrderASC, setIsSortOrderASC] = useState(true);
  const contacts = useSelector(state => state.contacts);
  const currentFilter = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(contact => {
    const fullName = `${contact.firstName} ${contact.lastName}`;
    return contact.firstName.toLowerCase().includes(currentFilter)
            || contact.lastName.toLowerCase().includes(currentFilter)
            || fullName.toLowerCase().includes(currentFilter);
  });

  const handleSortOnClick = () => {
    setIsSortOrderASC(!isSortOrderASC);
  };

  return (
    <div className="contact-list-container">
      <div className="contact-list-header">
        <Filter placeholder="Insert search term" />
        <div className="contact-list__sort-container" role="button" tabIndex={0} onClick={handleSortOnClick}>
          <span className="contact-list__sort-value">
            sort by name
          </span>
          <span className={`contact-list__sort-icon-${isSortOrderASC ? 'ASC' : 'DESC'}`} />
        </div>
        <p>{`${filteredContacts.length} contacts found`}</p>
      </div>
      <div className="contact-list">
        {sortData(filteredContacts, 'firstName', isSortOrderASC ? 'ASC' : 'DESC')
          .map(contact => <ContactCard key={contact.id} contact={contact} />)}
      </div>
    </div>
  );
};

export default ContactList;
