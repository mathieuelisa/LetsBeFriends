import './styles.scss';

const Tag = ({ name, className, tag, handleClick}) => (
  <div className='tag-container'>
    <div className='tag-container__name'>{tag}</div>
    <div className='tag-container__exit' onClick={handleClick}>X</div>
  </div>
);

export default Tag;