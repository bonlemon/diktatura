import React from 'react';

import './PaymentInfo.scss';


class PaymentInfo extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="paymant">
                            <div>
                                Диктатура - тц "Ролл Холл"
                            </div>
                            <div className="shop__address">
                                Vы принимаем:
                                <ul>
                                    <li>Дебетовые/Rредитный карты  (Visa, Master Card, Maestro и др.)</li>
                                    <li>QIWI</li>
                                    <li>Яндекс.Деньги</li>
                                </ul>
                            </div>
                            <div className="shop__work-time">
                                Оплата заказа наличными возможна при самовывозе из магазина и при курьерской доставке.
                            </div>
                            <div className="shop__phone">
                                ОБРАЩАЕМ ВАШЕ ВНИМАНИЕ, ЧТО ЗАКАЗЫ В РЕГИОНЫ ОТПРАВЛЯЮТСЯ СТРОГО ПО ПОЛНОЙ ПРЕДОПЛАТЕ.
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

export default PaymentInfo;