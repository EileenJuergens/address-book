import { connect } from 'react-redux'
import ContactCard from './contact-card'
import './contact-list.css'

const ContactList = (props) => {
    return (
        <div className='contact-list-container'>
            {props.contacts.map(contact =>
                <ContactCard key={contact.id} contact={contact} />
            )}
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts,
    }
}


export default connect(
    mapStateToProps
)(ContactList)
