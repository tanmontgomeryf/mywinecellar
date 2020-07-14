import React from 'react';
import './Landing.css';
import WineList from '../WineList/WineList';

const Landing = () => {
    return (
        <>
            <main className="hero">
                <div className="container">
                    <h4>
                        We’ve come a long way since the era of the cellar book,
                        when wine bottles had to be logged by hand in paperbound
                        tomes and tracked by little tags hanging from their
                        necks. The wine world is actively embracing technology,
                        and home enthusiasts can get in on the action as well,
                        using this website to help keep their stash tabulated
                        and organized.
                    </h4>
                </div>
            </main>
            <WineList myWineCellar={false} />
        </>
    );
};

export default Landing;
