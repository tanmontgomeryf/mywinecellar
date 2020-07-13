import React from 'react';
import { cleanWineName } from '../../helper';

const WineItem = ({ wineData }) => {
    const { wine, color, appellation, country, score, vintage } = wineData;
    const wineTitleObj = cleanWineName(wine, appellation);
    const { company, wineName, otherName } = wineTitleObj;
    return (
        <div>
            <h3>{company}</h3>
            <h1>
                {wineName} {otherName} ({vintage} vintage)
            </h1>
            <h4>
                {color} wine from {appellation}, {country}
            </h4>
            <h3>Score: {score}</h3>
        </div>
    );
};

export default WineItem;
