import React from "react";

class InvolvementCard extends React.Component {
    render() {
        return (
            <div className="involvement-card col-sm-6" data-aos="fade-up">
                <h2>{this.props.item.name}</h2>
                <hr></hr>
                <p>{this.props.item.description}</p>
                <div className="involvement-card-button">
                    <a className="cta" href={this.props.item.url} target="_blank" rel="noopener noreferrer">
                        <span>{this.props.item.urltitle}</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </a>
                </div>
            </div>
        );
    }

}

export default InvolvementCard;