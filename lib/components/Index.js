import React from 'react';
import ReactDom from 'react-dom';
import cards from '../constants/const';
 
//styles
import '../styles/style.css';
import 'bootstrap';

//components
import GameControl from './GameControl';

class App extends React.Component {
  constructor(){
    super()
    

  }

  render(){
    return (
      <div>
        <GameControl cards = {[...cards]}  />
      </div>
    );
  }
}

ReactDom.render(
  <App />,
  document.getElementById('root')
);
