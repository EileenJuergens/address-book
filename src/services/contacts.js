import axios from 'axios';

const baseUrl = 'http://localhost:3001/contacts';

export const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const getId = () => (100000 * Math.random()).toFixed(0);

export const createNew = async ({ firstName, lastName, streetName, zipCode, city, phoneNumber, email }) => {
  const object = {
    id: getId(),
    firstName,
    lastName,
    streetName,
    zipCode,
    city,
    phoneNumber,
    email
  };
  const response = await axios.post(baseUrl, object);
  return response.data;
};

export const deleteOne = async id => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.data;
};
