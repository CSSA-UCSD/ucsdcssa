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

        return (
            <div className="events-container col-md-4 col-sm-6">
                <div className="events-card" data-aos="fade-up">
                    <div className="events-info">
                        { this.props.item.url && 
                            <a href={this.props.item.url} target="_blank" rel="noopener noreferrer">
                                <div className="events-image pb-3">
                                    {this.props.item.imgHover ? 
                                        <img src={ require(`../../../img/events/${this.props.item.img}`) } 
                                            onMouseOver={e => (e.currentTarget.src = require(`../../../img/events/${this.props.item.imgHover}`) )}
                                            onMouseOut={e => (e.currentTarget.src = require(`../../../img/events/${this.props.item.img}`) )}
                                            alt={this.props.item.name}>
                                        </img>
                                        : <img src={ require(`../../../img/events/${this.props.item.img}`)} alt={this.props.item.name}></img>
                                    }
                                </div>
                            </a> 
                        }
                        <div className="events-name">
                            <h3>{this.props.item.name}</h3>
                        </div>
                        <div className="events-date">
                            <p>{this.props.item.date}</p>
                        </div>
                        { this.props.item.url && 
                            <div className="events-buttons pb-3">
                                <a className="cta" href={this.props.item.url} target="_blank" rel="noopener noreferrer">
                                    <span className="small-title events-btn">Event Details</span>
                                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                                        <path d="M1,5 L11,5"></path>
                                        <polyline points="8 1 12 5 8 9"></polyline>
                                    </svg>
                                </a>
                            </div>
                        }
                        { (this.props.item.zoom || this.props.item.url2) && 
                            <div className="events-buttons">
                                { this.props.item.zoom && 
                                    <a className="cta" href={this.props.item.zoom} target="_blank" rel="noopener noreferrer">
                                        {this.props.item.linkName1 ? 
                                        <span className="small-title events-btn">{this.props.item.linkName1}</span>
                                        : <span className="small-title events-btn">Zoom Link</span>
                                        }
                                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                                            <path d="M1,5 L11,5"></path>
                                            <polyline points="8 1 12 5 8 9"></polyline>
                                        </svg>
                                    </a>
                                }
                                { this.props.item.url2 &&
                                    <a className="cta" href={this.props.item.url2} target="_blank" rel="noopener noreferrer">
                                        <span className="small-title events-btn">{this.props.item.linkName2}</span>
                                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                                            <path d="M1,5 L11,5"></path>
                                            <polyline points="8 1 12 5 8 9"></polyline>
                                        </svg>
                                    </a>
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default EventsCard;