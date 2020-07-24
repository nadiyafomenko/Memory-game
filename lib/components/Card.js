import React from 'react';

let moveCounter = 0;

export default class Card extends React.Component {
    constructor(props){
      super(props)
      this.rotate = this.rotate.bind(this)
      this.state = {
        isRotated: true
      }
    }

    rotate() {
      this.setState({
        isRotated: this.state.isRotated ? false : true
      })
      this.props.move(this.props.cardInf.id)
    }

    render() {
      return (
        <div className="flip-card" onClick = { this.rotate } >
          <div className={`flip-card-inner ${this.state.isRotated ? "" : "rotated"}`} >
            <div className="flip-card-front"></div>
            <div className="flip-card-back">
              <img src = { this.props.cardInf.src } />
            </div> 
          </div>
        </div>
      );
    }
  } 