import PropTypes from 'prop-types';


function ButtonToggleResult({className, name, handleClick}){

    return(
        <div className={className} onClick={handleClick}>
            {name}
        </div>
    )
}

ButtonToggleResult.propTypes = {
    className: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };

export default ButtonToggleResult