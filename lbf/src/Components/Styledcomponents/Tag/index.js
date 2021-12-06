import './styles.scss';

const Tag = ({ name, className, handleClick}) => (
  <div className='tag-container'>
    <div className='tag-container__name'>{name}</div>
    <div className='tag-container__exit' onClick={handleClick}>X</div>
  </div>
);

export default Tag;