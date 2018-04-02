// Lybrary's
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import AuthBar from '../AuthBar';
import Tabs from '../Tabs';

// Images
import logo from '../../images/logo.png';

// Styles
import './Auth.scss';

// Routes
import AuthRouter from '../../routes/Auth';
import Footer from '../Footer';

class Auth extends React.Component {

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
            <div className="wrAuther">
                <div className="content-wrAuther">
                    <header className="header">
                        <AuthBar>
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
                        </AuthBar>
                    </header>
                    <section className="content">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <Tabs items={items} />
                                </div>
                            </div>
                        </div>
                    </section>
                    <AuthRouter />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Auth;