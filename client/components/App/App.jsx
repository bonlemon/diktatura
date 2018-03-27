import React from 'react';

import AppRouter from '../../routes/app';

import './App.scss';

import logo from '../../images/logo.png';


class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 col-md-4">
                                <img src={logo} alt="Logo" />
                            </div>
                            <div className="col"></div>
                            <div className="col">
                                <i class="fa fa-user fa-lg"></i>
                            </div>
                        </div>
                    </div>
                </header>
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
                                    <form className="footer__subscribe">
                                        <input type="text"/>
                                        <button>Подписаться</button>
                                    </form>
                                    <div className="footer_social">
                                        <i className="fa fa-facebook-f fa-lg footer__social-img"></i>
                                        <i className="fa fa-vk fa-lg footer__social-img"></i>
                                        <i className="fa fa-instagram fa-lg footer__social-img"></i>
                                        <i className="fa fa-telegram-plane fa-lg footer__social-img"></i>
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