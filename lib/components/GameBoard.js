import React from 'react';

import Card from './Card';

let id = 0;

export default class GameBoard extends React.Component {
    constructor(props) {
      super(props)
      this.move = this.move.bind(this);

      this.img = this.props.img;
      this.cards = [];

      this.state = {
        prevId: -1,
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
      }
    }

    render() {
      if (this.cards.length === 0){
        this.initCards();
      } 
      return (
        <div className = "container"> 
          <div className="row">
            {this.cards.map((value) => (
              <Card cardInf = { value } move = { this.move }> </Card>
            ))}
          </div>
        </div>
      )
    }
}  
  