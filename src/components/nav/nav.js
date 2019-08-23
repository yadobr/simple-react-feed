import React, {Component} from 'react';
import './nav.css';

class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <div className="nav__head"></div>
                <div className="nav__body">
                    <div className="nav__item nav__item_active">Главная</div>
                    <div className="nav__item">Поиск</div>
                    <div className="nav__item">Уведомления</div>
                    <div className="nav__item">Сообщения</div>
                    <div className="nav__item">Закладки</div>
                    <div className="nav__item">Списки</div>
                    <div className="nav__item">Профиль</div>
                    <div className="nav__item">Еще</div>
                </div>
            </div>
        )
    }
}

export default Nav;
