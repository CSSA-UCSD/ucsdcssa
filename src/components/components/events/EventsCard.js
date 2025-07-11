import React from "react";
import placeholderImage from "../../../img/events/fall2024/FallGBM_1.png"; // Ensure this placeholder exists

class EventsCard extends React.Component {
    constructor() {
        super();
        this.state = {
            imageSrc: placeholderImage // Default to placeholder image
        };
    }

    render() {
        let imageUrl, imageHoverUrl;

        // Try to load the image and the hover image, fallback to placeholder if not found
        try {
            imageUrl = require(`../../../img/events/${this.props.item.img}`).default;
        } catch (e) {
            imageUrl = placeholderImage; // Use placeholder if image is missing
        }

        if (this.props.item.imgHover) {
            try {
                imageHoverUrl = require(`../../../img/events/${this.props.item.imgHover}`).default;
            } catch (e) {
                imageHoverUrl = imageUrl; // Fallback to main image if hover image is missing
            }
        }

        return (
            <div className="events-container col-md-4 col-sm-6">
                <div className="events-card" data-aos="fade-up">
                    <div className="events-info">
                        { this.props.item.url ?
                            <a href={this.props.item.url} target="_blank" rel="noopener noreferrer">
                                <div className="events-image pb-3 events-image-hover">
                                    <img 
                                        src={imageUrl} 
                                        onMouseOver={e => { if (imageHoverUrl) e.currentTarget.src = imageHoverUrl }}
                                        onMouseOut={e => { e.currentTarget.src = imageUrl }}
                                        alt={this.props.item.name}>
                                    </img>
                                </div>
                            </a>
                            :
                            <div className="events-image pb-3">
                                <img src={imageUrl} alt={this.props.item.name}></img>
                            </div>
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
