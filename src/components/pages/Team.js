import React from "react";
import '../../style/main.scss';
import Member from "../components/team/Member";
import execData from "../data/team/execData";
import presData from "../data/team/presData";
import advisorsData from "../data/team/advisorsData";

class Team extends React.Component {
    render() {
        const AdvisorsComponent = advisorsData.map(item => < Member key={item.id} item={item}/>);
        const PresComponent = presData.map(item => < Member key={item.id} item={item}/>);
        const ExecComponent = execData.map(item => < Member key={item.id} item={item}/>);
        return (
            <div className="team">
                <div className="container">
                    <h1>Meet the Team</h1>
                    <div className="team-exec">
                        <h2>2022-2023 Executive Board</h2>
                        <hr></hr>
                        <div className="row justify-content-center">
                            {PresComponent}
                        </div>
                        <div className="row justify-content-center">
                            {ExecComponent}
                        </div>
                    </div>
                    <div className="team-advisors">
                        <h2>Advisors</h2>
                        <hr></hr>
                        <div className="row justify-content-center">
                            {AdvisorsComponent}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Team;