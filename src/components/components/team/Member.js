import React from "react";
import AOS from "aos";

class Member extends React.Component {

    componentDidMount() {
        AOS.init({
            duration : 1750
        });
    }

    render() {
        return (
            <>
                <div className="member col-md-6 pb-5" data-aos="fade-up">
                    <div className="member-img" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                        <img
                            src={require(`../../../img/team/${this.props.item.img}`).default}
                            onMouseOver={e => this.props.item.imgHover && (e.currentTarget.src = require(`../../../img/team/${this.props.item.imgHover}`).default)}
                            onMouseOut={e => (e.currentTarget.src =  require(`../../../img/team/${this.props.item.img}`).default)}
                            alt={this.props.item.name}
                        />
                    </div>
                    <div className="member-info">
                        <h3>{this.props.item.name}</h3>
                        <p>
                            {this.props.item.position}
                            {this.props.item.year && <span>, Class of {this.props.item.year}</span>}
                        </p>  {/* Position and Class on the same line */}
                         <p style={{display: this.props.item.major ? "block" : "none", fontSize: "0.9em"}}>Major: {this.props.item.major}</p>
                         <p style={{display: this.props.item.minor ? "block" : "none", fontSize: "0.9em"}}> Minor: {this.props.item.minor} </p>
                         <p style={{display: this.props.item.email ? "block" : "none", fontSize: "0.9em"}}><a href={`mailto:${this.props.item.email}`}>{this.props.item.email}</a></p>
                    </div>
                </div>
            </>
        );
    }
}

export default Member;
