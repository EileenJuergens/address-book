import React from "react";
import PropTypes from "prop-types";
import './contact-card.css'

function ContactCard({ contact }) {
	return (
		<div className="contact-card-container">
			<div className="contact-card">
				<div className="contact-card__first-section">
					<div className="contact-card__name">
						{`${contact.firstName} ${contact.lastName}`}
					</div>
				</div>
				<div className="contact-card__second-section">
					<div className="contact-card__address">
						<p>{contact.streetName}</p>
						<p>{`${contact.zipCode} ${contact.city}`}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

ContactCard.propTypes = {
    contact: PropTypes.object.isRequired
};

export default ContactCard;