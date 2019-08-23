import React, {Component} from 'react';
import './aside.css';

class Aside extends Component {
    render() {
        return (
            <div className="aside">
                <div className="aside__head">Кого читать</div>
                <div className="aside__body">
                    <div className="aside__item">
                        <div className="aside__avatar" style={ {backgroundImage: 'url(https://i.pravatar.cc/100?u=21)'} }></div>
                        <div className="aside__author">DONTNOD_Ent</div>
                        <div className="aside__follow">Читать</div>
                    </div>
                    <div className="aside__item">
                        <div className="aside__avatar" style={ {backgroundImage: 'url(https://i.pravatar.cc/100?u=22)'} }></div>
                        <div className="aside__author">Edouard Caplain</div>
                        <div className="aside__follow">Читать</div>
                    </div>
                    <div className="aside__item">
                        <div className="aside__avatar" style={ {backgroundImage: 'url(https://i.pravatar.cc/100?u=23)'} }></div>
                        <div className="aside__author">Christian Divine</div>
                        <div className="aside__follow">Читать</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Aside;
