import React from 'react';

import GameBoard from './GameBoard';
import Menu from './Menu';


export default class GameControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleStart = this.handleStart.bind(this);
      this.chooseLevel = this.chooseLevel.bind(this);

      this.state = {
        isStarted: false,
        level: ''
      }
    }
  
    handleStart(){
      if(this.state.level != '') 
        this.setState({
          isStarted: this.state.isStarted ? false : true
        });
    }

    chooseLevel(event) {
      this.setState({
        level: event.target.id
      });  
    }

    render() {
      let board;
  
      if (!this.state.isStarted) {
        board = <Menu onClick = { this.handleStart } chooseLevel = { this.chooseLevel }/>
      } else {
        board = <GameBoard  
          updateScore = { this.updateScore } 
          handleStart = { this.handleStart }
          level = { this.state.level }
        />
      }
  
      return (
          <div className = "board">
            {board}
          </div>
      );
    }
  }