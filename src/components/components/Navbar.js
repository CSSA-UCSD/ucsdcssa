import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../img/logos/Wordmark_Dark.svg";

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                    <div className="container">
                        <NavLink to="/" exact className="navbar-brand"><img src={Logo} alt="CSSA @ UCSD"></img> </NavLink>
                        <div className="menu">
                            <ul className="nav">
                                <li className='nav-item'>
                                    <NavLink to='/team' className='nav-link' activeClassName='active-link'>Team</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink to='/events' className='nav-link' activeClassName='active-link'>Events</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink to='/involvement' className='nav-link' activeClassName='active-link'>Resources</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <a href='https://cssa-ucsd-membership.onrender.com/' target='_blank' className='nav-link' rel="noopener noreferrer">Membership</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
