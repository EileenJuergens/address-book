import contactService from '../services/contacts'

const contactReducer = (state = [], action) => {
    switch (action.type) {  
        case 'INIT_CONTACTS':
            return action.data
        default:
            return state
    }
}

export const initializeContacts = () => {
    return async dispatch => {
        const contacts = await contactService.getAll()

        dispatch({
            type: 'INIT_CONTACTS',
            data: contacts
        })
    }
}

export default contactReducer;