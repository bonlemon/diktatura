// Lybrary's
import React from 'react';

// Components
import AppBar from '../AppBar';
import Tabs from '../Tabs';

// Images
import logo from '../../images/logo.png';

// Styles
import './App.scss';

// Routes
import AppRouter from '../../routes/app';


class App extends React.Component {

    render() {
        const items = [
            {
                id:         "main-page",
                label:      "Основная информация",
                url:        "/",
            },
            {
                id:         "shop-page",
                label:      "Магазин",
                url:        "/shop",
            },
            {
                id:         "contact-page",
                label:      "Контакты",
                url:        "/contacts",
            }
        ];
        return (
            <div className="wrapper">
                <header className="header">
                    <AppBar>
                        <div className="container">
                            <div className="row">
                                <div className="col-4 d-none d-md-block">
                                    <div className="header__contact">
                                        +7 (999) 717 09 71
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="header__logo">
                                        <img src={logo} alt="Logo" />
                                    </div>
                                </div>
                                <div className="col d-none d-md-block">
                                    <div className="header__icons">
                                        <i class="fa fa-user fa-lg"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AppBar>
                </header>
                <section className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Tabs items={items}/>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <AppRouter /> */}
                <section className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                efwe
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="footer__links">
                                    <div className="row">
                                        <div className="col">
                                            <form className="footer__subscribe">
                                                <input type="text"/>
                                                <button>Подписаться</button>
                                            </form>
                                        </div>
                                        <div className="w-100 d-block d-md-none"></div>
                                        <div className="col">
                                            <div className="footer_social">
                                                <i className="fa fa-facebook-f fa-lg footer__social-img"></i>
                                                <i className="fa fa-vk fa-lg footer__social-img"></i>
                                                <i className="fa fa-instagram fa-lg footer__social-img"></i>
                                                <i className="fa fa-telegram-plane fa-lg footer__social-img"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-100"></div>
                            <div className="col">
                                <div className="footer__info">
                                    
                                </div>
                            </div>
                            <div className="w-100"></div>
                            <div className="col">
                                <div class="footer__copyright">
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