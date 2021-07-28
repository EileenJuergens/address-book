import { getAll, createNew, deleteOne } from '../services/contacts';

const contactReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_CONTACTS':
      return action.payload;
    case 'NEW_CONTACT':
      return [...state, action.payload];
    case 'DELETE_CONTACT':
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};

export const initializeContacts = () => async dispatch => {
  const contacts = await getAll();

  dispatch({
    type: 'INIT_CONTACTS',
    payload: contacts
  });
};

export const createContact = content => async dispatch => {
  const newContact = await createNew(content);

  dispatch({
    type: 'NEW_CONTACT',
    payload: newContact
  });
};

export const deleteContact = id => async dispatch => {
  await deleteOne(id);

  dispatch({
    type: 'DELETE_CONTACT',
    payload: id
  });
};

export default contactReducer;
