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

import React from 'react';
import './style/main.scss'; // Ensure your styles are imported

import Navbar from './components/components/Navbar';
import Main from './components/Main';
import Footer from './components/components/Footer';

// Import FullCalendar and the dayGrid plugin
import FullCalendar from '@fullcalendar/react'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 

function App() {
  return (
    <div className="App">
     <Navbar />
     <Main />

      {/* FullCalendar Component */}
      <FullCalendar
        plugins={[dayGridPlugin]} // Specify the plugins you are using
        initialView="dayGridMonth" // Set the initial view
        events={[ // Example events
          { title: 'Event 1', date: '2024-10-01' },
          { title: 'Event 2', date: '2024-10-05' },
        ]}
      />
<Footer />
    
    </div>
  );
}

export default App;
