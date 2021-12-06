import PropTypes from 'prop-types';


function ButtonToggleResult({className, name, handleClick, classNameButton}){

    return(
        <div className={className} onClick={handleClick}>
            {/* <button className={classNameButton}> */}
                {name}
            {/* </button> */}
        </div>
    )
}

ButtonToggleResult.propTypes = {
    className: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };

export default ButtonToggleResult