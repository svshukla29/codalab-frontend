import React from 'react';
import './Event.css'; 
import Events from './Events';
import { useState, useEffect } from 'react';
const Event = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(import.meta.env.VITE_EVENT_API_URL);
           
            const data = await response.json();
            // console.log(data);
            setEvents(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, []);
  return (
    <div className="events" style={{marginBottom:'10%'}}>
      <h2>Events</h2>
      <hr />
      {events.map(event => (
        <Events key={event._id} url = {event.url} description = {event.eventDescription} date={event.date}/>
      ))}
      
    </div>
  );
};

export default Event;