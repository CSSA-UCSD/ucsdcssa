import React from "react";
import { NavLink } from "react-router-dom";
import logoIcon from "../../img/logos/Logo_White.svg";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.navRef = React.createRef();
        this.state = {
            menuOpen: false,
        };
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleDocumentClick);
        document.addEventListener("keydown", this.handleDocumentKeydown);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleDocumentClick);
        document.removeEventListener("keydown", this.handleDocumentKeydown);
    }

    handleDocumentClick = (event) => {
        if (this.state.menuOpen && this.navRef.current && !this.navRef.current.contains(event.target)) {
            this.closeMenu();
        }
    };

    handleDocumentKeydown = (event) => {
        if (event.key === "Escape" && this.state.menuOpen) {
            this.closeMenu();
        }
    };

    toggleMenu = () => {
        this.setState((prevState) => ({
            menuOpen: !prevState.menuOpen,
        }));
    };

    closeMenu = () => {
        this.setState({
            menuOpen: false,
        });
    };

    render() {
        const { menuOpen } = this.state;

        return (
            <div className={`navbar-wrapper ${menuOpen ? "menu-open" : ""}`}>
                <nav className="navbar" ref={this.navRef}>
                    <div className="container">
                        <NavLink to="/" exact className="navbar-brand" onClick={this.closeMenu}>
                            <img src={logoIcon} alt="CSSA logo" className="navbar-logo" />
                            <div className="brand-text">
                                <span className="brand-label">CSSA</span>
                                <span className="brand-sub">UC San Diego</span>
                            </div>
                        </NavLink>

                        <button
                            type="button"
                            className={`menu-toggle ${menuOpen ? "open" : ""}`}
                            onClick={this.toggleMenu}
                            aria-label="Toggle navigation"
                            aria-expanded={menuOpen}
                        >
                            <span />
                            <span />
                            <span />
                        </button>

                        <div className="menu">
                            <ul className="nav">
                                <li className="nav-item">
                                    <NavLink to="/team" className="nav-link" activeClassName="active-link" onClick={this.closeMenu}>
                                        Team
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/events" className="nav-link" activeClassName="active-link" onClick={this.closeMenu}>
                                        Events
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/involvement" className="nav-link" activeClassName="active-link" onClick={this.closeMenu}>
                                        Resources
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <a href="https://cssa-ucsd-membership.onrender.com/" target="_blank" rel="noopener noreferrer" className="nav-link" onClick={this.closeMenu}>
                                        Membership
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://cssa-ucsd.github.io/conference2026/" target="_blank" rel="noopener noreferrer" className="nav-link" onClick={this.closeMenu}>
                                        Conference
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
