// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

// Redux middleware
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

// Routes
import RootRouter from './routes/root';

// Reducer
import reducer from './reducers';

// Styles
// import './ui-kit/main'


// compose middlewares for redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// middleware: create log when action was dispatcheds
const logger = createLogger();


const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk, logger))
);

ReactDOM.render(
    <Provider store={store}>
        <RootRouter/>
    </Provider>,
    document.getElementById('app')
)