import React from "react";

class SidebarComponent extends React.Component {
    render() {
        return (
            <div className="sidebar-component py-2">
                <p className="sidebar-subtitle">{this.props.item.type}</p>
                <a className="sidebar-link cta" href={this.props.item.url} alt={this.props.item.url} target="_blank" rel="noopener noreferrer">
                    <span className="sidebar-title">{this.props.item.title}</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </a>
            </div>
        );
    }
}

export default SidebarComponent;