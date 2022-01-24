import React from "react";

class PrevEventsCard extends React.Component {

    render() {

        return (
            <div className="events-container col-md-4 col-sm-6">
                <div className="events-card" data-aos="fade-up">
                    <div className="events-info">
                        { this.props.item.img && this.props.item.url ?
                            <a href={this.props.item.url} target="_blank" rel="noopener noreferrer">
                                <div className="events-image pb-3 events-image-hover">
                                    <img src={ require(`../../../img/events/${this.props.item.img}`) } alt={this.props.item.name}></img>
                                </div>
                            </a>
                            : this.props.item.img &&
                                <div className="events-image pb-3">
                                    <img src={ require(`../../../img/events/${this.props.item.img}`) } alt={this.props.item.name}></img>
                                </div>    
                        }
                        <div className="events-name">
                            <h3>{this.props.item.name}</h3>
                        </div>
                        <div className="events-date">
                            <p>{this.props.item.date}</p>
                        </div>
                        <div style={{display: this.props.item.slides ? "block" : "none"}} className="events-buttons pb-3">
                            <a className="cta" href={this.props.item.slides} target="_blank" rel="noopener noreferrer">
                                <span className="small-title events-btn">Slides</span>
                                <svg width="13px" height="10px" viewBox="0 0 13 10">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </a>
                        </div>
                        <div style={{display: this.props.item.zoom ? "block" : "none"}} className="events-buttons">
                            <a className="cta" href={this.props.item.zoom} target="_blank" rel="noopener noreferrer">
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