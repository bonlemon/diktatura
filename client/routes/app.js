// Libs
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Component
// import Section from '../components/Section';
import Contacts from '../components/Contacts';
// import PaymentInfo from '../components'


const SectionRouter = () => (
        <Switch>
            {/* <Route path='/' component={Section} /> */}
            <Route path='/contacts' component={Contacts} />
            {/* <Route path='/contacts' component={PaymentInfo} /> */}
        </Switch>
)

export default SectionRouter;