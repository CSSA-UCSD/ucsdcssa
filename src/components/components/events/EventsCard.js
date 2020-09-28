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
            <div className="events-container">
                <div className="events-card" data-aos="fade-up">
                    <div className="events-info">
                        <div className="row">
                            <div className="col-8">
                                <div className="events-name">
                                    <h3>{this.props.item.name}</h3>
                                </div>
                                <div className="events-date">
                                    <h4>{this.props.item.date}</h4>
                                </div>
                                <div className="events-description">
                                    <p>{this.props.item.description}</p>
                                </div>
                                <div className="events-buttons">
                                    <a className="cta" href={this.props.item.url} target="_blank" rel="noopener noreferrer">
                                        <span className="small-title">Event Details</span>
                                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                                            <path d="M1,5 L11,5"></path>
                                            <polyline points="8 1 12 5 8 9"></polyline>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="col-4 d-flex align-items-center">
                                <img src={ require(`../../../img/events/${this.props.item.img}`) } alt={this.props.item.name}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventsCard;