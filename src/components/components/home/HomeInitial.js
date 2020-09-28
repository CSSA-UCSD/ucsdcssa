import React from "react";
import Button from "../Button";
import { BrowserRouter as Router } from "react-router-dom";
import ParticleComponent from "./ParticleComponent";

class HomeInitial extends React.Component {

    render() {
        return (
            <Router>
            <div>
                <ParticleComponent />
                {/* You can render <Route> and <NavTabs /> here */}
                <div className="home-initial" id="particles-js">
                    <div className="home-title">
                        <h1 className="title pb-3">Cognitive Science Student Association at University of California San Diego</h1>
                    </div>
                    <div className="home-buttons">
                        <div className="row">
                            <div className="col-md-auto py-4">
                                < Button text="Learn More" url="#learn-more"/>
                            </div>
                            <div className="col-md-auto py-4">
                                < Button text="Get Involved" url="https://cssa-ucsd.org/involvement"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Router>
        )
    }

}
export default HomeInitial;