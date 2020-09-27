import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logos/logo-text.svg";

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                    <div className="container">
                        <Link to="/" className="navbar-brand"><img src={Logo} alt="CSSA @ UCSD"></img> </Link>
                        <div className="menu">
                            <ul className="nav">
                                <li className='nav-item'>
                                    <Link to='/team' className='nav-link'>Team</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/events' className='nav-link'>Events</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/involvement' className='nav-link'>Involvement</Link>
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