//Import styles
import './styles.scss';
//Import images
import eventImage from '../../../assets/Img/kitchen.png' ;

const EventCard = () => (
  <div className='eventcard'>
    <div className='eventcard__infos'>
      <div className='eventcard__infos__profil'>
        <h2 className='eventcard__infos__profil--firstname'>Gertrude M.</h2>
        <p className='eventcard__infos__profil--age'>45</p>
      </div>
      <div className='eventcard__infos__event'>
        <h3 className='eventcard__infos__event--eventname'>Cooking Class</h3>
        <p className='eventcard__infos__event--cityevent'>Paris, 20ème</p>
        <p className='eventcard__infos__event--eventdate'>July - 12th - 2021</p>
        <p className='eventcard__infos__event--eventlanguage'>French</p>
        <p className='eventcard__infos__event--numberspotsleft'>2 spots left</p>
      </div>
    </div>
    <div className='eventcard__image'>
      <img src={eventImage} alt='logo-event' />
    </div>
  </div>
);

export default EventCard;