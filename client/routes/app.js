// Libs
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Component
import Section from '../components/Section';


const AppRouter = () => (
        <Switch>
            <Route path='/categories/:catId' component={Section} />
            <Route path='/' component={Section} />
        </Switch>
)

export default AppRouter;