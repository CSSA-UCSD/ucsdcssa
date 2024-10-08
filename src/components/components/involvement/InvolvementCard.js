import React from "react";

class InvolvementCard extends React.Component {
    render() {
        var links = this.props.item.url

        return (
            <div className="involvement-card col-sm-6" data-aos="fade-up">
                <h2>{this.props.item.name}</h2>
                <hr></hr>
                <p>{this.props.item.description}</p>
                <ul>
                    {Object.keys(links || {})?.map(key => 
                        <div key={key} style={{display: links[key] ? "block" : "none"}} className="involvement-card-button">
                            <a className="cta" href={links[key]} target="_blank" rel="noopener noreferrer">
                                <span>{key}</span>
                                <svg width="13px" height="10px" viewBox="0 0 13 10">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </a>
                        </div>
                    )}
                </ul>
            </div>
        );
    }

}

export default InvolvementCard;