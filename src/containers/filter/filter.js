import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filterChange } from '../../reducers/filterReducer';
import '../../components/redux-input-field/redux-input-field.css';

const Filter = ({ placeholder }) => {
  const dispatch = useDispatch();

  const handleChange = event => {
    event.preventDefault();
    dispatch(filterChange(event.target.value));
  };

  return (
    <input onChange={handleChange} className="input-field" placeholder={placeholder} />
  );
};

Filter.propTypes = {
  placeholder: PropTypes.string.isRequired
};

export default Filter;
