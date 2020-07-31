import React from 'react'

import { hardSet } from '../constants/const'
import Card from './Card'

import '../styles/bg.css'

let id = 0;

export default class Background extends React.Component {
    constructor(){
        super()
        this.renderCards = this.renderCards.bind(this)
        this.shuffle = this.shuffle.bind(this)
        this.img = [...hardSet]
        this.cards = []
        this.img.map( () => {
            this.cards[id] = {
              id: id,
              src: this.img[id]
            }
            id++;
          })
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

    renderCards(){
        let copy = this.cards.concat(this.cards.slice());
        this.cards = this.cards.concat(copy);  
        this.shuffle(this.cards);
    }

    render(){
        this.renderCards()
        return(
            this.cards.map((value) => (
                <Card cardInf = { value } level = { 'easy' }/> 
            ))
        )
    }
}