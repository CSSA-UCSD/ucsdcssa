import React from "react";

import EventsCard from "../components/events/EventsCard";
import archivesData from "../data/events/archivesData";
import prevEventsData from "../data/events/prevEventsData";
import upcomingEventsData from "../data/events/upcomingEventsData";
import Archives from "../components/events/Archives";
import AOS from "aos";

class Events extends React.Component {
    componentDidMount() {
        // or simply just AOS.init();
        AOS.init({
            // initialise with other settings
            duration : 2000
        });
    }

    render() {
        const upcomingComponent = upcomingEventsData.map(item => < EventsCard key={item.id} item={item}/>);
        const archivesComponent = archivesData.map(item => < Archives key={item.id} item={item}/>);
        const previousComponent = prevEventsData.map(item => < EventsCard key={item.id} item={item}/>);
        return (
            <div className="container events">
                <div className="row">
                    <div className="col-sm-8 order-sm-2 pb-5">
                        <h1>Events</h1>
                    </div>
                </div>
                <div className="events-section row">
                    <div className="col-sm-4 events-section-title">
                        <h2>Upcoming Events</h2>
                    </div>
                    <div className="col-sm-8">
                        {upcomingComponent}
                    </div>
                </div>
                <div className="events-section row">
                    <div className="col-sm-4 events-section-title">
                        <h2>Previous Events</h2>
                    </div>
                    <div className="col-sm-8">
                        {previousComponent}
                    </div>
                </div>
                <div className="events-section row">
                    <div className="col-sm-4 events-section-title">
                        <h2>Archives</h2>
                    </div>
                    <div className="col-sm-8">
                        {archivesComponent}
                    </div>
                </div>
            </div>
        );
    }
}

export default Events;