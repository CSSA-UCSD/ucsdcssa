import React from "react";

import EventsCard from "../components/events/EventsCard";
import PrevEventsCard from "../components/events/PrevEventsCard";
import Archives from "../components/events/Archives";
import archivesData from "../data/events/archivesData";
import prevEventsData from "../data/events/prevEventsData";
import upcomingEventsData from "../data/events/upcomingEventsData";
import AOS from "aos";


// import './style/main.scss'; // Ensure your styles are imported
// Import FullCalendar and the dayGrid plugin
import FullCalendar from '@fullcalendar/react'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 


class Events extends React.Component {
    componentDidMount() {
        AOS.init({
            duration : 2000
        });
    }

    render() {
        const sortedUpcomingEvents = upcomingEventsData.sort((eventA, eventB) => eventA.id - eventB.id);
        const upcomingComponent = sortedUpcomingEvents.map(item => < EventsCard key={item.id} item={item}/>);
        const archivesComponent = archivesData.map(item => < Archives key={item.id} item={item}/>);
        const previousComponent = prevEventsData.map((item, key) => < PrevEventsCard key={`${key}: ${item.date.split(" ")[1]}`} item={item}/>);
        return (
            <div className="container events">
                <div className="row">
                    <div className="col-sm-8 order-sm-2 pb-5">
                        <h1>Events</h1>
                        <p>We host a variety of events year-round, including professional development workshops, 
                            academic seminars, and networking opportunities. Join us to learn more about the field of cognitive science, 
                            connect with like-minded individuals, and grow both academically and professionally</p>
                    </div>
                </div>
                      {/* FullCalendar Component */}
                <FullCalendar plugins={[dayGridPlugin]} // Specify the plugins you are using
                initialView="dayGridMonth" // Set the initial view
                validRange={{ start: '2024-10-01', end: '2025-12-31' }} 
                events={[ 
                    { title: 'GBM 1', date: '2024-10-24' },
                    { title: 'Lab Open House', date: '2024-11-19' },
                    { title: 'Resume Workshop', date: '2025-1-13' },
                    { title: 'Winter GBM', date: '2025-1-15' },
                    { title: 'Portfolio Workshop', date: '2025-1-22' },
                    { title: 'Figma Workshop', date: '2025-1-30' },
                    { title: 'Logistic Regression Workshop', date: '2025-2-4' },
                    { title: 'Coffee Chats with Board Members', date: '2025-2-6' },
                    { title: 'Creativity Workshop', date: '2025-2-10' },
                    { title: 'Valentines Arts and Crafts', date: '2025-2-12' },
                    { title: 'Speaker Series', date: '2025-2-19' },
                    { title: 'Speaker Series', date: '2025-2-20' },
                    { title: 'Speaker Series', date: '2025-2-21' },
                    { title: 'Board Game Night', date: '2025-2-27' }

                ]}
                eventsSet={(events) => console.log(events)}  
                />
                <div className="events-section-title">
                    <br></br>
                    <br></br>
                    <h2>Upcoming Events</h2>
                    <hr></hr>
                </div>
                <div className="events-section row">
                    {upcomingComponent}
                </div>
                <div className="events-section-title">
                    <h2>Previous Events</h2>
                    <hr></hr>
                </div>
                <div className="events-section row">
                    {previousComponent}
                </div>
                <div className="events-section-title">
                    <h2>Archives</h2>
                    <hr></hr>
                </div>
                <div className="events-section row">
                    {archivesComponent}
                </div>
            </div>
        );
    }
}

export default Events;