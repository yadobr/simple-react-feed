import React from 'react';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Layout from './components/layout';
import Nav from './components/nav';
import Feed from './components/feed';
import Aside from './components/aside';

const initialState = {
    author: 'Lao Tzu',
    login : '@lao_tzu1',
    isOverlayOpened: false,
    tweets: [
        {id: 1, text: 'А вообще у нас сборы, завтра домой, в воскресенье приеду', author: 'Артур Блэк', login: '@Sempai_Black', date: 1565265809},
        {id: 2, text: 'Тут у @ulalaunch могучий #AtlasV собирается отправить на орбиту #AEHF5. Пока небольшая задержка -  решают некоторые технические проблемы', author: 'The Alpha Centauri', login: '@theACentauri', date: 1565262209},
        {id: 3, text: 'Очень давно не приезжал в Москву. Знаете, бывает такое чувство нахлынет, что вот прям тянет в столицу почему-то) Люблю Москву и люди там чудесные. Романтика!', author: 'Данила Поперечный', login: '@Spoontamer', date: 1565357300},
        {id: 4, text: 'Что-то Экзомарсу пока не везёт. Во время испытаний парашютной системы что-то пошло не так, из-за чего был утерян полноразмерный макет', author: 'The Alpha Centauri', login: '@theACentauri', date: 1565357357},
        {id: 5, text: 'There is no question that reliable electricity unlocks a better life for people. But can we power the world without contributing to climate change? I think we can', author: 'Bill Gates', login: '@BillGates', date: 1565357487}
    ]
}

function reducer(state = initialState, action) {
    let newState = Object.assign({}, state);

    if( action.type == 'TOGGLEOVERLAY')
        newState.isOverlayOpened = !newState.isOverlayOpened;

    else if( action.type == 'ADDTWEET')
        newState.tweets.push(action.payload)

    return newState;
}

let store = createStore(reducer);

// store.subscribe(() =>
//     console.log(store.getState())
// )

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Layout
                    nav  ={<Nav/>}
                    main ={<Feed/>}
                    aside={<Aside/>}
                />
            </div>
        </Provider>
    );
}

export default App;
