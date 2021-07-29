import PropTypes from 'prop-types';
import './button.css';

function Button({ children, onClick = () => { }, btnType = 'primary', type = 'button' }) {
  return (
    <button
      onClick={onClick}
      className={`button ${btnType === 'primary' ? 'button-primary' : 'button-secondary'}`}
      type={type}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  btnType: PropTypes.oneOf(['primary', 'secondary']),
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
};

export default Button;
