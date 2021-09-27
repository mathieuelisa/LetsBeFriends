import './styles.scss';
import PropTypes from 'prop-types';

const Input = ({ name, placeHolder, value, onChange, classNameDiv, classNameInput, type, label }) => (
  <div className={classNameDiv}>
    <input className={classNameInput} name={name} placeholder={placeHolder} value={value} onChange={onChange} label={label} type={type} />
  </div>
);

Input.propTypes = {
    typeForm: PropTypes.string,
    placeHolder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    classNameDiv: PropTypes.string,
    classNameInput: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
}

export default Input;