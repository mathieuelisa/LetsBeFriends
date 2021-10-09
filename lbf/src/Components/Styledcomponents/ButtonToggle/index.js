import PropTypes from 'prop-types';


function ButtonToggle({className, classNameDiv, name, handleClick}){

    return(
        <div className={classNameDiv}>
            <button className={className} onClick={handleClick}>{name}</button>
        </div>
    )
}

ButtonToggle.propTypes = {
    className: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };

export default ButtonToggle

