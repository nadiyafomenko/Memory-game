import React from 'react';

import Card from './Card';

let id = 0;

export default class GameBoard extends React.Component {
    constructor(props){
      super(props)
      this.img = this.props.img
      this.move = this.move.bind(this)
      this.cards = [];
      this.state = {
        prevId: -1,
      }
    }
  
    initCards(){
      this.img.map((value) => {
        this.cards[id] = {
          id: id,
          src: this.img[id]
        }
        id++;
      })    
    }

    move(id){
      if(this.state.prevId == id) {
        console.log(id)
      } else {
        this.setState({
          prevId: id
        })
      }
    }

    render() {
      if (this.cards.length === 0){
        this.initCards();
      } 
      return (
        <div className = "card-container"> 
        {this.cards.map((value) => (
          <Card cardInf = { value } move = { this.move }> </Card>
        ))}
        </div>
      )
    }
}  
  