import React from "react";
import AOS from "aos";

class Member extends React.Component {

    componentDidMount() {
        AOS.init({
            duration : 2000
        });
    }

    render() {


        return (
            <div className="member col-md-4 pb-5" data-aos="fade-up">
                <div className="member-img" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                    <img
                        src={ require(`../../../img/team/${this.props.item.img}`) }
                        onMouseOver={e => (e.currentTarget.src = require(`../../../img/team/${this.props.item.imgHover}`) )}
                        onMouseOut={e => (e.currentTarget.src =  require(`../../../img/team/${this.props.item.img}`) )}
                        alt=""
                    />
                </div>
                <div className="member-info">
                    <h3>{this.props.item.name}</h3>
                    <p>{this.props.item.position}</p>
                    <p style={{display: this.props.item.year ? "block" : "none"}}>Class of {this.props.item.year}</p>
                </div>

            </div>
        );
    }
}

export default Member;