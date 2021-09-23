import './styles.scss';
import PropTypes from 'prop-types';

const Input = ({ type, placeHolder, value, onChange, classNameDiv, classNameInput }) => (
  <div className={classNameDiv}>
    <input className={classNameInput} type={type} placeholder={placeHolder} value={value} onChange={onChange} />
  </div>
);

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeHolder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    classNameDiv: PropTypes.string.isRequired,
    classNameInput: PropTypes.string.isRequired,
}

export default Input;