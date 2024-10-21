import React from "react";

class PrevEventsCard extends React.Component {

    render() {
        const { img, url, name, date, slides, zoom } = this.props.item;
        let imageUrl;

        try {
            // Attempt to load the image if it exists
            imageUrl = require(`../../../img/events/${img}`).default;
        } catch (e) {
            // If the image doesn't exist, use a placeholder or null
            imageUrl = '/path/to/placeholder.png'; // Provide a valid placeholder image path
        }

        return (
            <div className="events-container col-md-4 col-sm-6">
                <div className="events-card" data-aos="fade-up">
                    <div className="events-info">
                        { img && url ?
                            <a href={url} target="_blank" rel="noopener noreferrer">
                                <div className="events-image pb-3 events-image-hover">
                                    <img src={imageUrl} alt={name}></img>
                                </div>
                            </a>
                            : img &&
                                <div className="events-image pb-3">
                                    <img src={imageUrl} alt={name}></img>
                                </div>    
                        }
                        <div className="events-name">
                            <h3>{name}</h3>
                        </div>
                        <div className="events-date">
                            <p>{date}</p>
                        </div>
                        <div style={{display: slides ? "block" : "none"}} className="events-buttons pb-3">
                            <a className="cta" href={slides} target="_blank" rel="noopener noreferrer">
                                <span className="small-title events-btn">Slides</span>
                                <svg width="13px" height="10px" viewBox="0 0 13 10">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </a>
                        </div>
                        <div style={{display: zoom ? "block" : "none"}} className="events-buttons">
                            <a className="cta" href={zoom} target="_blank" rel="noopener noreferrer">
                                <span className="small-title events-btn">Zoom Recording</span>
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

export default PrevEventsCard;
