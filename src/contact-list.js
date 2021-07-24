import { connect } from 'react-redux'

const ContactList = (props) => {
    return (
        props.contacts.map(contact =>
            <div key={contact.id}>
                <div>{contact.firstName} {contact.lastName}</div>
            </div>
        )

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
