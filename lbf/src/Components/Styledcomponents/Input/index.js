import './styles.scss';
import PropTypes from 'prop-types';

const Input = ({ name, placeHolder, value, onChange, classNameDiv, classNameInput, typeForm, type }) => (
  <div className={classNameDiv}>
    <input className={classNameInput} name={name} placeholder={placeHolder} value={value} onChange={onChange} typeForm={typeForm} type={type} />
  </div>
);

Input.propTypes = {
    typeForm: PropTypes.string.isRequired,
    placeHolder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    classNameDiv: PropTypes.string.isRequired,
    classNameInput: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}

export default Input;