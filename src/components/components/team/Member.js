import React from "react";
import testImg from "../../../img/team/testImgs/group.jpg";
import testImgHover from "../../../img/team/testImgs/gbm.jpg";
import AOS from "aos";

class Member extends React.Component {

    componentDidMount() {
        AOS.init({
            duration : 2000
        });
    }

    constructor() {
        super();
        this.state = {
            imageSrc: require("../../../img/team/testImgs/group.jpg") 
        };
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter() {
        this.setState({imageSrc: testImgHover});
     }
     
     handleMouseLeave() {
        this.setState({imageSrc: testImg});
     }

    render() {


        return (
            <div className="member col-md-4 pb-5" data-aos="fade-up">
                <div className="member-img" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                    <img src={this.state.imageSrc} alt={this.props.item.name}/>
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