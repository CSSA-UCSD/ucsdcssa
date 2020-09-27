import React from "react";
import '../../style/main.scss';

class Team extends React.Component {
    render() {
        return (
            <div className="container team">
                <div className="row">
                    <div className="col-sm-8 order-sm-2">
                        <h1>This is the Team Page</h1>
                        <p>This is a paragraph.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Team;