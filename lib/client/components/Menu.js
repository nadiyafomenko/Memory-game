import React from 'react';

export default class Menu extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            totalScore: 0,
            targetId: ''
        }
    }
    render(){
        return(
        <div className = "menu-board">
            <h3 className = "welcome" >Welcome!</h3>
            <h2 className = "score" >Total score - { this.state.totalScore }</h2>
            <div className="btn-group" role="group" >
                <button 
                    type="button" 
                    id = 'easy'
                    className= "btn btn-light btn-checkbox"
                    onClick = { this.props.chooseLevel } 
                    >
                        Easy
                    </button>
                <button 
                    type="button" 
                    id = 'medium'
                    className= "btn btn-light btn-checkbox"
                    onClick = { this.props.chooseLevel } 
                    >
                        Medium
                    </button>
                <button 
                    type="button" 
                    id = 'hard'
                    className= "btn btn-light btn-checkbox"
                    onClick = { this.props.chooseLevel } 
                    >
                        Hard
                    </button>
            </div>
           <button 
                type="button" 
                className="btn btn-primary btn-start" 
                onClick = { this.props.onClick } 
                level = { this.state.targetId }
                > 
                    Start 
            </button>
        </div>
        )
    }
}