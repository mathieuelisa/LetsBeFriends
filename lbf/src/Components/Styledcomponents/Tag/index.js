import './styles.scss';

const Tag = ({ name, className, tag}) => (
  <div className='tag-container'>
    <div className='tag-container__name'>{tag}</div>
    <div className='tag-container__exit'>x</div>
  </div>
);

export default Tag;