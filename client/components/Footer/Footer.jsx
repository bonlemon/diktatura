// Lybrary's
import React from 'react';

// Styles
import './Footer.scss';



class Footer extends React.Component {

    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="footer__links">
                                <div className="row">
                                    <div className="col col-md-6">
                                        <form className="footer__subscribe">
                                            <input
                                                className="footer__input"
                                                type="text"
                                                placeholder="email"
                                            />
                                            <button>Подписаться</button>
                                        </form>
                                    </div>
                                    <div className="w-100 d-block d-md-none"></div>
                                    <div className="col col-md-6">
                                        <div className="footer__social">
                                            <i className="fa fa-facebook-f fa-lg footer__social-img"></i>
                                            <i className="fa fa-vk fa-lg footer__social-img"></i>
                                            <i className="fa fa-instagram fa-lg footer__social-img"></i>
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
                            <div className="footer__copyright">
                                © Copyright 2018 diktature.com
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;