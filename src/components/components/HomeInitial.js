import React from "react";
import Button from "./Button";

class HomeInitial extends React.Component {
    render() {
        return (
            <div className="home-initial">
                <div className="home-title">
                    <h1 className="title pb-3">Cognitive Science Student Association at University of California, San Diego</h1>
                </div>
                <div className="home-buttons">
                    <div className="row">
                        <div className="col-md-6 py-4">
                            < Button text="Learn More" url="#learn-more"/>
                        </div>
                        <div className="col-md-6 py-4">
                            < Button text="Get Involved" url="https://cssa-ucsd.org/involvement"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default HomeInitial;