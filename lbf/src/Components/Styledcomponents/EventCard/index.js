//Import styles
import './styles.scss';
//Import images
import eventImage from '../../../assets/Img/videogames.png' ;
//import React Component
import Avatar from '../Avatar';

const EventCard = () => (
  <div className='eventcard'>
    <div className='eventcard__infos'>
      <div className='eventcard__infos__profil'>
        <Avatar customDiv='avatar-div' customImg='avatar-image' />
        <div className='eventcard__infos__profil__identity'>
          <h2 className='eventcard__infos__profil__identity--firstname'>Gertrude M.</h2>
          <p className='eventcard__infos__profil__identity--age'>21 ans</p>
        </div>
      </div>
      <div className='eventcard__infos__event'>
        <h3 className='eventcard__infos__event--eventname'>Cooking Class</h3>
        <p className='eventcard__infos__event--cityevent'>Paris, 20ème</p>
        <p className='eventcard__infos__event--eventdate'>July - 12th - 2021</p>
        <p className='eventcard__infos__event--eventlanguage'>French</p>
        <p className='eventcard__infos__event--numberspotsleft'>2 spots left</p>
      </div>
    </div>
    <div className='eventcard__imagediv'>
      <img className='eventcard__image'src={eventImage} alt='logo-event' />
    </div>
  </div>
);

export default EventCard;


