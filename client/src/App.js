import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Landing from './component/Landing/Landing';
import WineItem from './component/WineList/WineItem';
import { fetchWineData } from './redux';
import WineList from './component/WineList/WineList';
import AddWine from './component/WineList/AddWine';
import Navbar from './component/Layout/Navbar';

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
                    path="/wine/:wine_id/:vintage"
                    render={(props) => <WineItem {...props} />}
                />
                <Route
                    exact
                    path="/mywinecellar"
                    render={() => <WineList myWineCellar />}
                />
                <Route
                    exact
                    path="/mywinecellar/add"
                    render={(props) => <AddWine {...props} />}
                />
            </Switch>
        </div>
    );
}

export default App;
