import { getAll, createNew } from '../services/contacts'

const contactReducer = (state = [], action) => {
    switch (action.type) {
        case 'INIT_CONTACTS':
            return action.data
        case 'NEW_CONTACT':
            return [...state, action.data]
        default:
            return state
    }
}

export const initializeContacts = () => {
    return async dispatch => {
        const contacts = await getAll()

        dispatch({
            type: 'INIT_CONTACTS',
            data: contacts
        })
    }
}

export const createContact = (content) => {
    return async dispatch => {
        const newContact = await createNew(content)

        dispatch({
            type: 'NEW_CONTACT',
            data: newContact
        })
    }
}

export default contactReducer;