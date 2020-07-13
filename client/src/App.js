import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Landing from './component/Landing/Landing';

function App() {
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
