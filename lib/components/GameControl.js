import React from 'react';

import GameBoard from './GameBoard';
import Menu from './Menu';


export default class GameControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleStart = this.handleStart.bind(this)

      this.cards = this.props.cards;

      this.state = {
        isStarted: false
      }
    }
  
    handleStart(){
      this.setState({
          isStarted: this.state.isStarted ? false : true
        });
    }

    render() {
      let board;
  
      if (!this.state.isStarted) {
        board = <Menu onClick = { this.handleStart } />
      } else {
        board = <GameBoard img={ this.cards }  updateScore = { this.updateScore } handleStart = { this.handleStart }/>
      }
  
      return (
          <div className = "board">
            {board}
          </div>
      );
    }
  }