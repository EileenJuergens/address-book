import React from 'react';
import PropTypes from 'prop-types';
import { MdPlace, MdEmail, MdPhone, MdDelete } from 'react-icons/md';
import './contact-card.css';

function ContactCard({ contact, handleDeleteContact }) {
  return (
    <div className="contact-card-container">
      <div className="contact-card">
        <div className="contact-card__first-section">
          <div className="contact-card__name">
            {`${contact.firstName} ${contact.lastName}`}
            <MdDelete className="contact-card__delete" onClick={() => handleDeleteContact(contact.id)} />
          </div>
        </div>
        <div className="contact-card__second-section">
          <div className="contact-card__details">
            <MdPlace />
            <p>{`${contact.streetName}, ${contact.zipCode} ${contact.city}`}</p>
          </div>
          <div className="contact-card__details">
            <MdEmail />
            <p>{contact.email}</p>
          </div>
          <div className="contact-card__details">
            <MdPhone />
            <p>{contact.phoneNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

ContactCard.propTypes = {
  contact: PropTypes.object.isRequired,
  handleDeleteContact: PropTypes.func.isRequired
};

export default ContactCard;
