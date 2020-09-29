import React from "react";
import InvolvementCard from "../components/involvement/InvolvementCard";
import involvementData from "../data/involvementData";

class Involvement extends React.Component {
    render() {
        const InvolvementComponent = involvementData.map(item => < InvolvementCard key={item.id} item={item}/>);
        return (
            <div className="container involvement">
                <div className="row">
                    <div className="col-sm-8 order-sm-2 involvement-intro">
                        <h1>Get Involved</h1>
                    </div>
                </div>
                <div className="row involvement-cards">
                    {InvolvementComponent}
                </div>
            </div>
        );
    }
}

export default Involvement;