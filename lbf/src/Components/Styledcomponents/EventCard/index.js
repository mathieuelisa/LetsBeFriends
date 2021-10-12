//Import styles
import './styles.scss';
//Import images
import groupLogo from '../../../assets/Icons/group.svg';
import placeholder from '../../../assets/Icons/placeholder.svg'
import calendar from '../../../assets/Icons/calendar.svg'
//import React Component
import Avatar from '../Avatar';

import avatarMicheline from "../../../assets/Img/micheline.jpg"

const EventCard = ({ startingDate, placesLeft, title, imgUrl, languages}) => (
  
  <div className='eventcard'>
    <div className='eventcard__infos'>
      <div className='eventcard__infos__profil'>

        {/* Profil */}

        {/* <Avatar 
          customDiv='avatar-div' 
          customImg='avatar-image'
          customPics={avatarMicheline} 
        /> */}
        <div className='eventcard__infos__profil__identity'>
          <h2 className='eventcard__infos__profil__identity--firstname'></h2>
          <p className='eventcard__infos__profil__identity--age'></p>
        </div>
      </div>

      {/* Event */}

      <div className='eventcard__infos__event'>
        <h3 className='eventcard__infos__event--eventname'>{title}</h3>

        {/* Place */}
        <div className='eventcard__infos__event--cityevent'>
          <img src={placeholder} alt='logo-geo' className='logo' />
          <p className='eventcard__infos__event--cityevent---city'>Paris, 20ème</p>
        </div>

        {/* Date */}
        <div className='eventcard__infos__event--eventdate'>
          <img src={calendar} alt='logo-calendar' className='logo' />
          <p className='eventcard__infos__event--eventdate---date'>{startingDate}</p>
        </div>
          <p className='eventcard__infos__event--eventlanguage'>{languages.map(language => <div>{language.name}</div>)}</p>

        {/* Spots */}
        <div className='eventcard__infos__event--numberspotsleft'>
          <img src={groupLogo} alt='logo-group' className='logo' />
          <p className='eventcard__infos__event--numberspotsleft---number'>{placesLeft} spots left</p>
        </div>
      </div>
    </div>

    {/* IMAGE EVENT */}
    <div className='eventcard__imagediv'>
      <img className='eventcard__image'src={imgUrl} alt='logo-event' />
    </div>
  </div>
);

export default EventCard;


