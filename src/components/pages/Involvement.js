import React from "react";
import InvolvementCard from "../components/involvement/InvolvementCard";
import involvementData from "../data/involvementData";
import AOS from "aos";

class Involvement extends React.Component {
    componentDidMount() {
        AOS.init({
            duration : 2000
        });
    }
    render() {
        const sortedInvolvementData = involvementData.sort((itemA, itemB) => itemA.id - itemB.id);
        const InvolvementComponent = sortedInvolvementData.map(item => < InvolvementCard key={item.id} item={item}/>);
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