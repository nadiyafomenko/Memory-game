import React from 'react';
import ReactDom from 'react-dom';
import cards from '../constants/const';

import '../styles/style.css';

import GameControl from './GameControl';

function App() {
  return (
    <GameControl cards = {[...cards]}/>
  );
}

ReactDom.render(
  <App />,
  document.getElementById('root')
);
