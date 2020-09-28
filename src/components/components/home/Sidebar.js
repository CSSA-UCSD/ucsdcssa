import React from "react";
import SidebarComponent from "./SidebarComponent"
import highlightsData from '../../data/sidebar/highlightsData';
import socialUpdatesData from '../../data/sidebar/socialUpdatesData';
import supportUsData from '../../data/sidebar/supportUsData';

class Sidebar extends React.Component {
    render() {
        const highlightsComponent = highlightsData.map(item => < SidebarComponent key={item.id} item={item}/>);
        const socialUpdatesComponent = socialUpdatesData.map(item => < SidebarComponent key={item.id} item={item}/>);
        const supportUsComponent = supportUsData.map(item => < SidebarComponent key={item.id} item={item}/>);
        return (
            <div className="sidebar">
                <div className="sidebar-section">
                    <h3>Highlights</h3>
                    <hr></hr>
                    {highlightsComponent}
                </div>
                <div className="sidebar-section">
                    <h3>Social Media Updates</h3>
                    <hr></hr>
                    {socialUpdatesComponent}
                </div>
                <div className="sidebar-section">
                    <h3>Support Us</h3>
                    <hr></hr>
                    {supportUsComponent}
                </div>
            </div>
        );
    }
}

export default Sidebar;