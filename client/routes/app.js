// Libs
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Component
// import Section from '../components/Section';
import Contacts from '../components/Contacts';


const SectionRouter = () => (
        <Switch>
            {/* <Route path='/' component={Section} /> */}
            <Route path='/contacts' component={Contacts} />
        </Switch>
)

export default SectionRouter;