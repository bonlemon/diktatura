// Libs
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Component
import App from './../components/App';
import Admin from './../components/Admin';


const RootRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/admin' component={Admin} />
            <Route path='/' component={App} />
        </Switch>
    </BrowserRouter>
)

export default RootRouter;