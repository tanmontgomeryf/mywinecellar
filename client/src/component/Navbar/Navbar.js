import React from 'react';

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <nav>
                    <div className="nav-logo">
                        <h2>My Wine Cellar</h2>
                    </div>
                    <ul className="nav-list">
                        <li className="nav-list">
                            <a href="/winelist">Wine List</a>
                        </li>
                        <li>Search</li>
                        <li className="nav-list">
                            <a href="/mywinecellar">My Wine Cellar</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
