/* global FullCalendar */

import React, { useEffect } from 'react';
import './style/main.scss';

import Navbar from './components/components/Navbar';
import Main from './components/Main';
import Footer from './components/components/Footer';

function App() {
  useEffect(() => {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      events: [
        { title: 'Event 1', date: '2024-08-20' },
        { title: 'Event 2', date: '2024-08-21' }
      ]
      
    });
    calendar.render();
  }, []); 
  return (
    <div className="App">
      < Navbar/>
      < Main/>
      <div id="calendar" className="calendar-container"></div>
      < Footer/>
    </div>
  );
}

export default App;
