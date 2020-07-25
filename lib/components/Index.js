import React from 'react';
import ReactDom from 'react-dom';
import cards from '../constants/const';
 
//styles
import '../styles/style.css';
import 'bootstrap';

//components
import GameControl from './GameControl';
import Score from './Score';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      score: 0
    }
  }
  
  render(){
    return (
      <div>
        <GameControl cards = {[...cards]} />
        <Score score = { this.state.score }/>
      </div>
    );
  }
}

ReactDom.render(
  <App />,
  document.getElementById('root')
);
