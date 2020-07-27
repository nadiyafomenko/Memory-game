import React from 'react';

import Card from './Card';
import Score from './Score';

let id = 0;

export default class GameBoard extends React.Component {
    constructor(props) {
      super(props)
<<<<<<< HEAD
      this.move = this.move.bind(this)
      this.reset = this.reset.bind(this)
      this.removePair = this.removePair.bind(this)
      this.updateScore = this.updateScore.bind(this)
      this.isFinished = this.isFinished.bind(this)
=======
      this.move = this.move.bind(this);
>>>>>>> 7c9021c9329673c75b8498b74cf2401d22057a8a

      this.img = this.props.img;
      this.cards = [];

      this.state = {
        prevId: -1,
        score: 0
      }
    }
<<<<<<< HEAD

=======
  
>>>>>>> 7c9021c9329673c75b8498b74cf2401d22057a8a
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

    initCards() {
      this.img.map((value) => {
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
<<<<<<< HEAD
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

      console.log(cards.length)
      if(cards.length === 0){
        return true;
      }
  
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
=======
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
          console.log(`yes`);
          this.setState({
            prevId: -1
          })
          break;
        } 
        default: {
          console.log('no');
          this.setState({
            prevId: -1
          });
          break;
        }
>>>>>>> 7c9021c9329673c75b8498b74cf2401d22057a8a
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
          console.log(`yes`);
          this.updateScore();
          setTimeout(this.removePair, 1000);
          break;
        } 
        default: {
          console.log('no');
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
        this.initCards();
      } 
      return (
        <div className = "container"> 
          <div className="row">
            {this.cards.map((value) => (
<<<<<<< HEAD
              <Card cardInf = { value } move = { this.move } prevId = { this.state.prevId }> </Card>
            ))}
          </div>
          <Score score = { this.state.score }/>
=======
              <Card cardInf = { value } move = { this.move }> </Card>
            ))}
          </div>
>>>>>>> 7c9021c9329673c75b8498b74cf2401d22057a8a
        </div>
      )
    }
}  
  