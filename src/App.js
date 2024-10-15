// /* global FullCalendar */

// import React, { useEffect } from 'react';
// import './style/main.scss';

// import FullCalendar from '@fullcalendar/react'; // FullCalendar component
// import dayGridPlugin from '@fullcalendar/daygrid'; // dayGrid plugin
// import '@fullcalendar/common/main.css'; // Correct path for FullCalendar core styles
// import '@fullcalendar/daygrid/main.css'; // DayGrid plugin styles

// import Navbar from './components/components/Navbar';
// import Main from './components/Main';
// import Footer from './components/components/Footer';

// function App() {
//   useEffect(() => {
//     var calendarEl = document.getElementById('calendar');
//     var calendar = new FullCalendar.Calendar(calendarEl, {
//       initialView: 'dayGridMonth',
//       events: [
//         { title: 'Event 1', date: '2024-08-20' },
//         { title: 'Event 2', date: '2024-08-21' }
//       ]
      
//     });
//     calendar.render();
//   }, []); 
//   return (
//     <div className="App">
//       < Navbar/>
//       < Main/>
//       <div id="calendar" className="calendar-container"></div>
//       < Footer/>
//     </div>
//   );
// }

// export default App;


import React, { useEffect } from 'react';
import './style/main.scss';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
// import '@fullcalendar/daygrid/main.css';

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
      <Navbar />
      <Main />
      <div id="calendar" className="calendar-container"></div>
      <Footer />
    </div>
  );
}

export default App;