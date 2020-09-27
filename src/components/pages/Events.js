import React from "react";
import '../../style/main.scss';

class Events extends React.Component {
    render() {
        return (
            <div className="container events">
                <div className="row">
                    <div className="col-sm-8 order-sm-2">
                        <h1>This is the Events Page</h1>
                        <p>This is a paragraph.</p>
                    </div>
                </div>
                <div className="events-section row">
                    <div className="col-sm-4">
                        <h1>Upcoming Events</h1>
                    </div>
                    <div className="col-sm-8">

                    </div>
                </div>
                <div className="events-section row">
                    <div className="col-sm-4">
                        <h1>Previous Events</h1>
                    </div>
                    <div className="col-sm-8">

                    </div>
                </div>
                <div className="events-section row">
                    <div className="col-sm-4">
                        <h1>Archives</h1>
                    </div>
                    <div className="col-sm-8">

                    </div>
                </div>
            </div>
        );
    }
}

export default Events;