import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

class HomeInitial extends React.Component {

    render() {
        return (
            
            <div>
                {/* You can render <Route> and <NavTabs /> here */}
                <div className="home-initial" id="particles-js">
                    <div className="home-title pb-3">
                        <h1 className="title">Cognitive Science <wbr></wbr>Student&nbsp;Association</h1>
                        <h1 className="title pb-3">at UC San Diego</h1>
                    </div>
                    <div className="home-buttons">
                        <div className="row">
                            <div className="col-md-auto py-4">
                                < Button text="Learn More" url="#learn-more"/>
                            </div>
                            <div className="col-md-auto py-4">
                                <Link to='/involvement' className='cta'>
                                    <span>Get Involved</span>
                                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                                        <path d="M1,5 L11,5"></path>
                                        <polyline points="8 1 12 5 8 9"></polyline>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default HomeInitial;