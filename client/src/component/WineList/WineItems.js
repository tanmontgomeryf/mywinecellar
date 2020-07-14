import React from 'react';
import { cleanWineName } from '../../helper';
import { Link } from 'react-router-dom';
import redWine from '../../img/RedWine.png';
import whiteWine from '../../img/WhiteWine.png';
import pinkWine from '../../img/PinkWine.png';

const WineItems = ({ wineData, myWineCellar }) => {
    const { wine, color, appellation, country, vintage, wine_id } = wineData;
    const wineTitleObj = cleanWineName(wine, appellation);
    const { company, wineName, otherName } = wineTitleObj;

    let img;

    if (color === 'Red') img = redWine;
    if (color === 'White') img = whiteWine;
    if (color === 'Pink') img = pinkWine;

    let result;

    if (myWineCellar) {
        result = (
            <>
                <div className="wineitems-div">
                    <img src={img} alt={color} className="wineitems-img" />
                    <div className="wineitems-info">
                        <h4>{company}</h4>
                        <h1>
                            {wineName} {otherName} ({vintage})
                        </h1>
                        <h4>
                            {color} wine from {appellation}, {country}
                        </h4>
                    </div>
                </div>
            </>
        );
    } else {
        result = (
            <>
                <Link to={`/wine/${wine_id}/${vintage}`}>
                    <div className="wineitems-div">
                        <img src={img} alt={color} className="wineitems-img" />

                        <div className="wineitems-info">
                            <h4>{company}</h4>
                            <h1>
                                {wineName} {otherName} ({vintage})
                            </h1>
                            <h4>
                                {color} wine from {appellation}, {country}
                            </h4>
                        </div>
                    </div>
                </Link>
            </>
        );
    }
    return <div className="wineitems">{result}</div>;
};

export default WineItems;
