import React from 'react';

import AppRouter from '../../routes/app';

import './App.scss';


class App extends React.Component {
    render() {
        return (
            <div>
                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 col-md-4">
                                <img src="../images/logo.png" alt="Logo"/>
                            </div>
                            <div className="col-4 col-md-4">
                                
                            </div>
                            <div className="col-4 col-md-4">
                                <AppRouter />
                            </div>
                        </div>
                    </div>
                </header>
                {/* <AppRouter /> */}
                <footer>
                    <div class="container">
                        <div className="row">
                            <div className="col-12 col-md-12">
                                <div class="copyright">
                                    © Copyright 2014 FreebiesXpress.com
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default App;