import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { filterWineDetails, isLanding } from '../../redux';
import { cleanWineName } from '../../helper';
import Loading from '../Layout/Loading';
import redWine from '../../img/RedWine.png';
import whiteWine from '../../img/WhiteWine.png';
import pinkWine from '../../img/PinkWine.png';
import './WineItem.css';

const WineItem = ({
    match,
    history,
    filterWineDetails,
    wine: { wineData, wineDetails },
    isLanding,
}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isOnMyCellar, setIsOnMyCellar] = useState(false);
    useEffect(() => {
        isLanding(false);
        if (wineData) {
            filterWineDetails(match.params);
            setIsLoading(false);
        }
    }, [match, wineData, filterWineDetails, isLanding]);
    useEffect(() => {
        if (wineDetails !== null && !isLoading) {
            const data = localStorage.getItem('cellarData');
            if (data !== null) {
                const parsedData = JSON.parse(data);
                parsedData.forEach((wineData) => {
                    if (
                        wineData.wine_id === wineDetails.wine_id &&
                        wineData.vintage === wineDetails.vintage
                    ) {
                        setIsOnMyCellar(true);
                    }
                });
            }
        }
    }, [wineDetails, isLoading]);

    let wineTitleObj =
        !isLoading && cleanWineName(wineDetails.wine, wineDetails.appellation);

    const handleClick = () => {
        const data = localStorage.getItem('cellarData');
        if (data === null) {
            localStorage.setItem('cellarData', JSON.stringify([wineDetails]));
            setIsOnMyCellar(true);
        }
        if (data !== null) {
            const parsedData = JSON.parse(data);
            const updatedData = [...parsedData, { ...wineDetails }];
            localStorage.setItem('cellarData', JSON.stringify(updatedData));
            setIsOnMyCellar(true);
        }
    };

    let img;

    if (wineDetails && wineDetails.color === 'Red') img = redWine;
    if (wineDetails && wineDetails.color === 'White') img = whiteWine;
    if (wineDetails && wineDetails.color === 'Pink') img = pinkWine;

    return isLoading ? (
        <Loading />
    ) : (
        <div className="wineitem">
            <div className="container">
                <button onClick={() => history.goBack()} className="flex-start">
                    Back
                </button>
                <div className="wineitem-div">
                    <img src={img} alt={wineDetails.color} />
                    <div className="wineitem-info">
                        <h3>{wineTitleObj.company}</h3>
                        <h1>
                            {wineTitleObj.wineName} {wineTitleObj.otherName} (
                            {wineDetails.vintage})
                        </h1>
                        <h3>
                            {wineDetails.color} wine from{' '}
                            {wineDetails.appellation}, {wineDetails.country}
                        </h3>
                        <div className="scores">
                            <h4>Score: {wineDetails.score}</h4>
                            <h4>
                                Confidence Index: {wineDetails.confidence_index}
                            </h4>
                            <h4>LWIN: {wineDetails.lwin}</h4>
                        </div>

                        <button
                            onClick={handleClick}
                            disabled={isOnMyCellar}
                            className={isOnMyCellar ? 'avail' : ''}
                        >
                            {isOnMyCellar
                                ? 'Wine is already in your Cellar'
                                : 'Add to my Cellar'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    wine: state.wine,
});

export default connect(mapStateToProps, { filterWineDetails, isLanding })(
    WineItem
);
