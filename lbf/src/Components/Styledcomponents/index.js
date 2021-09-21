// import './button.scss';

const Button = ({ className, name }) => {
    return (
        // toujours mettre un href sur un anchor sinon erreur lors de la lecture
    <a href="http://www.google.com" className={className}>{name}</a>
);}

export default Button;