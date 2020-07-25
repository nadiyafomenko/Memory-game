import React from 'react';

export default class Card extends React.Component {
    constructor(props){
      super(props)
      this.rotate = this.rotate.bind(this)
      this.state = {
        isRotated: true
      }
    }

    rotate() {
      if(this.state.isRotated) {
        this.props.move(this.props.cardInf.id)
      }
      this.setState({
        isRotated: this.state.isRotated ? false : false
      })
    }

    render() {
      return (
          <div className="flip-card col-3" onClick = { this.rotate } >
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