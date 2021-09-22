import './styles.scss';

//import React Components
import EventCard from '../../Styledcomponents/EventCard';

const Caroussel = () => (     
  <div className="container">
    <EventCard />
    <EventCard />
    <EventCard />
  </div>
);

export default Caroussel;