import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './redux-input-field.css';

function ReduxInputField({ placeholder = '', input = '', name, type = 'text', label, id }) {
  const [valueState, setValueState] = useState('');

  useEffect(() => {
    setValueState(input.value);
  }, [input.value]);

  const handleInputChange = event => {
    input.onChange(event.target.value);
    setValueState(event.target.value);
  };

  return (
    <div className="input-field-container">
      {label
                && (
                <label htmlFor={id} className="input-field-label">
                  {label}
                </label>
                )}
      <input
        id={id}
        type={type}
        value={valueState}
        name={name}
        placeholder={placeholder}
        onChange={handleInputChange}
        className="input-field"
      />
    </div>
  );
}

ReduxInputField.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  input: PropTypes.object.isRequired,
  name: PropTypes.string,
  id: PropTypes.string
};

export default ReduxInputField;
