import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';
import logo from '../../img/Logo.png';

const Navbar = () => {
    const isLanding = useSelector((state) => state.wine.isLanding);
    return (
        <header className={isLanding ? 'nav' : 'nav nav-alternate'}>
            <div
                className={
                    isLanding ? 'container' : 'container container-alternative'
                }
            >
                <nav>
                    <div className="nav-logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeClassName={
                                    isLanding
                                        ? 'isActive'
                                        : 'isActive isActive-alternative'
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/mywinecellar"
                                activeClassName={
                                    isLanding
                                        ? 'isActive'
                                        : 'isActive isActive-alternative'
                                }
                            >
                                My Cellar
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
