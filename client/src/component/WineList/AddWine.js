import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './AddWine.css';

const AddWine = ({ history }) => {
    const [formData, setFormData] = useState({
        wine: '',
        appellation: '',
        color: '',
        country: '',
        vintage: '',
    });

    const { wine, appellation, color, country, vintage } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = localStorage.getItem('cellarData');
        if (data === null) {
            localStorage.setItem(
                'cellarData',
                JSON.stringify([{ ...formData, wine_id: uuidv4 }])
            );
        } else {
            const parsedData = JSON.parse(data);
            const updatedData = [
                ...parsedData,
                { ...formData, wine_id: uuidv4 },
            ];
            localStorage.setItem('cellarData', JSON.stringify(updatedData));
        }
        setFormData({
            wine: '',
            appellation: '',
            color: '',
            country: '',
            vintage: '',
        });
        history.push('/mywinecellar');
    };

    return (
        <div className="addwine">
            <div className="container">
                <button onClick={() => history.goBack()}>go back</button>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="wine"
                        placeholder="Name of Wine"
                        value={wine}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="appellation"
                        placeholder="Appellation"
                        value={appellation}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="color"
                        placeholder="Type of Wine"
                        value={color}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        value={country}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="vintage"
                        placeholder="Year"
                        value={vintage}
                        onChange={handleChange}
                    />
                    <button type="submit">Add to my Cellar</button>
                </form>
            </div>
        </div>
    );
};

export default AddWine;
