/* Click Here by Andreas Storm
 * src: https://codepen.io/avstorm/pen/oqKbLq
 */

import React from "react";

class Button extends React.Component {
    render() {
        return (
            <a href={this.props.url} className="cta">
                <span>{this.props.text}</span>
                <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
            </a>
        );
    }
}

export default Button;