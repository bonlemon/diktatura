// Lybrary's
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import AppBar from '../AppBar';
// import Tabs from '../Tabs';
import Navbar from '../Navbar';

// Images
import logo from '../../images/logo.png';

// Styles
import './App.scss';

// Routes
import AppRouter from '../../routes/app';
import Footer from '../Footer';

class App extends React.Component {

    render() {
        const items = [
            {
                id: "main",
                label: "Новинки",
                url: "/",
            },
            // {
            //     id:         "shop-page",
            //     label:      "Магазин",
            //     url:        "/shop",
            // },
            {
                id: "contact-page",
                label: "Контакты",
                url: "/contacts",
            },
            {
                id: "payment",
                label: "Оплата",
                url: "/payment",
            }
        ];
        return (
            <div className="wrapper">
                <div className="content-wrapper">
                    <header className="header">
                        <AppBar>
                            <div className="container">
                                <div className="row">
                                    <div className="col-3 d-none d-md-block">
                                        <div className="header__contact">
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="header__logo">
                                            <Link to="/">
                                                <img src={logo} alt="Logo" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-3 d-none d-md-block">
                                        <div className="header__icons">
                                            <i className="fa fa-user fa-lg"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AppBar>
                    </header>
                    <section className="content">
                        <Navbar items={items} />
                    </section>
                    <AppRouter />
                </div>
                <Footer />
            </div>
        )
    }
}

export default App;