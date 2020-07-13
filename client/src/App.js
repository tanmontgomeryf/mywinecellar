import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Navbar from './component/Layout/Navbar';
import Landing from './component/Landing/Landing';
import { fetchWineData } from './redux';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchWineData());
    }, [dispatch]);

    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" render={() => <Landing />} />
                <Route
                    exact
                    path="/mywinecellar"
                    render={() => <h1>My Wine Cellar</h1>}
                />
            </Switch>
        </div>
    );
}

export default App;
