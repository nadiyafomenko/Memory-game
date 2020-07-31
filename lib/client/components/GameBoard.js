import React from 'react';

import Card from './Card';
import Score from './Score';

import { easySet, mediumSet, hardSet } from '../constants/const';

let id = 0;

export default class GameBoard extends React.Component {
    constructor(props) {
      super(props)
      this.move = this.move.bind(this)
      this.reset = this.reset.bind(this)
      this.removePair = this.removePair.bind(this)
      this.updateScore = this.updateScore.bind(this)
      this.isFinished = this.isFinished.bind(this)
      this.getLevel = this.getLevel.bind(this)
      
      this.img = [];
      this.cards = [];

      this.state = {
        prevId: -1,
        score: 0
      }
    }
    shuffle(array) {
      let currentIndex = array.length, temporaryValue, randomIndex;

      while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }

    getLevel(level){
      switch(level){
        case 'easy': {
          this.img = [...easySet];
          break;
        }
        case 'medium': {
          this.img = [...mediumSet];
          break;
        }
        case 'hard': {
          this.img = [...hardSet];
          break;
        }
      }
    }

    initCards(level) {
      this.getLevel(level)
      this.img.map( () => {
        this.cards[id] = {
          id: id,
          src: this.img[id]
        }
        id++;
      })
      let copy = this.cards.slice();
      this.cards = this.cards.concat(copy);  
      this.shuffle(this.cards);
      console.log(this.cards)
    }

    reset(){
      let cards = document.getElementsByClassName('flip-card-inner')
      cards = Array.from(cards);
      cards.map( (card) => {
          card.classList.remove('rotated')
      })
      this.setState({
        prevId: -1
      })
    }

    isFinished() {
      let cards = document.getElementsByClassName('flip-card-inner')
      cards = Array.from(cards);

      if(cards.length === 0) return true
      else return false
      
    } 

    removePair(){
      let cards = document.getElementsByClassName('flip-card')
      cards = Array.from(cards);

      cards.map( (card) => {
        if(card.firstChild && card.firstChild.classList.contains('rotated')){
          card.innerHTML = ''
        }
      })
      this.setState({
        prevId: -1
      })

      if(this.isFinished()){
        this.props.handleStart()
      }
    }

    move(id) {
      switch(this.state.prevId){
        case -1: {
          this.setState({
            prevId: id
          })
          break;
        }
        case id: {
          this.updateScore();
          setTimeout(this.removePair, 1000);
          break;
        } 
        default: {
          setTimeout(this.reset, 1000);
          break;
        }
      }
    }

    updateScore() {
      this.setState((state) => {
        return {score: state.score + 1}
      });
    }

    render() {
      if (this.cards.length === 0){
        this.initCards(this.props.level);
      } 
      return (
        <div className = {`container ${ this.props.level }-container`}> 
            {this.cards.map((value) => (
              <Card 
                cardInf = { value } 
                move = { this.move } 
                prevId = { this.state.prevId } 
                level = { this.props.level }
                /> 
            ))}
          <Score score = { this.state.score }/>
        </div>
      )
    }
}  
  