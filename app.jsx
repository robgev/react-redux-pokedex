import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './src/index.js'
import reducer from './reducer/reducer'
import { createStore } from 'redux';

const initialState = {
  list: [{ name: 'Bulbasaur', type: 'grass', img: '/img/1.png' },
    { name: 'Ivysaur', type: 'grass', img: '/img/2.png' },
    { name: 'Venusaur', type: 'grass', img: '/img/3.png' },
    { name: 'Charmander', type: 'fire', img: '/img/4.png' },
    { name: 'Charmeleon', type: 'fire', img: '/img/5.png' },
    { name: 'Squirtle', type: 'water', img: '/img/6.png' },
    { name: 'Wartortle', type: 'water', img: '/img/7.png' },
    { name: 'Blastoise', type: 'water', img: '/img/8.png' },
    { name: 'Caterpie', type: 'bug', img: '/img/9.png' },
    { name: 'Metapod', type: 'bug', img: '/img/10.png' },
    { name: 'Butterfree', type: 'bug', img: '/img/11.png' },
  ],
};
const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.querySelector('#root'))
