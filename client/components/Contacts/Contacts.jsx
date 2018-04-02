import React from 'react';

import Sidebar from '../Sidebar';

import './Contacts.scss';


class Section extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="shop">
                            <div className="shop__title">
                                Диктатура - тц "Ролл Холл"
                            </div>
                            <div className="shop__address">
                                115191, Москва, Холодильный пер., д.3,<br /> ТЦ "Ролл Холл", пав.75
                            </div>
                            <div className="shop__work-time">
                                Ежедневно: с 10:00 до 21:00
                            </div>
                            <div className="shop__phone">
                                + 7 (999)  809-68-11
                            </div>
                        </div>
                    </div>
                    <div className="w-100 d-blok d-md-none"></div>
                    <div className="col">
                        <div className="shop">
                            <div className="shop__title">
                                Диктатура - Дизайн-завод flacon
                            </div>
                            <div className="shop__address">
                                127015, Москва, ул. Большая Новодмитровская, д.36, этаж 3.
                            </div>
                            <div className="shop__work-time">
                                Ежедневно: с 12:00 до 21:00
                            </div>
                            <div className="shop__phone">
                                +7 (999) 717-09-71
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Section;