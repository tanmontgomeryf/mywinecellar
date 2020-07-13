import React from 'react';
import { connect } from 'react-redux';
import WineItem from '../WineItem/WineItem';
import { fetchMoreWineData } from '../../redux';
import './Landing.css';

const Landing = ({
    wine: { isLoading, wineData, error },
    fetchMoreWineData,
}) => {
    const handleMoreData = () => {
        fetchMoreWineData(wineData.next);
    };
    const handlePrevious = () => {
        fetchMoreWineData(wineData.previous);
    };
    return (
        <>
            <main className="hero"></main>
            <section className="winelist">
                {isLoading && wineData === null ? (
                    <h1>Loading</h1>
                ) : (
                    <>
                        <div className="winelist-sidebar"></div>
                        <div className="winelist-main">
                            {wineData.results.map((wineData) => (
                                <WineItem
                                    key={`${wineData.wine_id}${wineData.vintage}`}
                                    wineData={wineData}
                                />
                            ))}
                        </div>
                        {wineData.previous === null ? (
                            ''
                        ) : (
                            <button onClick={handlePrevious}>
                                Previous 100 items
                            </button>
                        )}
                        <button onClick={handleMoreData}>Next 100 items</button>
                    </>
                )}
            </section>
        </>
    );
};

const mapStateToProps = (state) => ({
    wine: state.wine,
});

export default connect(mapStateToProps, { fetchMoreWineData })(Landing);
