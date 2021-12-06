import './styles.scss';
import PropTypes from 'prop-types';

const Input = ({ name, placeHolder, value, onChange, classNameDiv, classNameInput, type, htmlFor }) => (
  <div className={classNameDiv}>
    <input className={classNameInput} name={name} placeholder={placeHolder} value={value} onChange={onChange} htmlFor={htmlFor} type={type} />
  </div>
);

Input.propTypes = {
    placeHolder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    classNameDiv: PropTypes.string,
    classNameInput: PropTypes.string,
    type: PropTypes.string,
    htmlFor: PropTypes.string,
    name: PropTypes.string,
}

export default Input;