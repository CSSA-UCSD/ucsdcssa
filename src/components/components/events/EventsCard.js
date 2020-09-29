import React from "react";
import placeholderImage from "../../../img/events/eventPlaceholder.jpg";

class EventsCard extends React.Component {

    constructor() {
        super();
        this.state = {
            imageSrc: placeholderImage
        };
    }


    render() {
        /*
        function importAll(r) {
            return r.keys().map(r);
        }
        
        const images = importAll(require.context('../../img/events/', false, /\.(png|jpe?g|svg)$/));
        */

        return (
            <div className="events-container col-md-4 col-sm-6">
                <div className="events-card" data-aos="fade-up">
                    <div className="events-info">
                        <a href={this.props.item.url} target="_blank" rel="noopener noreferrer">
                            <div className="events-image pb-3">
                                <img src={ require(`../../../img/events/${this.props.item.img}`) } alt={this.props.item.name}></img>
                            </div>
                        </a>
                        <div className="events-name">
                            <h3>{this.props.item.name}</h3>
                        </div>
                        <div className="events-date">
                            <p>{this.props.item.date}</p>
                        </div>
                        <div className="events-buttons">
                            <a className="cta" href={this.props.item.url} target="_blank" rel="noopener noreferrer">
                                <span className="small-title events-btn">Event Details</span>
                                <svg width="13px" height="10px" viewBox="0 0 13 10">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventsCard;