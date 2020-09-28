import React from "react";
import { Link } from "react-router-dom";
import placeholderImage from "../../../img/events/eventPlaceholder.jpg";

class Archives extends React.Component {

    constructor() {
        super();
        this.state = {
            imageSrc: placeholderImage
        };
    }


    render() {
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
                                    <div>
                                        <Link to={this.props.item.url}>Link</Link>
                                    </div>
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

export default Archives;
