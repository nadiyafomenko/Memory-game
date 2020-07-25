import React from 'react';

export default class Menu extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            totalScore: 0
        }
    }
    render(){
        return(
        <div className = "menu-board">
            <h3 className = "welcome" >Welcome!</h3>
            <h2 className = "score" >Total score - { this.state.totalScore }</h2>
            <div className="btn-group" role="group" >
                <button type="button" className="btn btn-light btn-checkbox">Easy</button>
                <button type="button" className="btn btn-light btn-checkbox">Medium</button>
                <button type="button" className="btn btn-light btn-checkbox">Hard</button>
            </div>
           <button type="button" className="btn btn-primary btn-start" onClick = { this.props.onClick }> Start </button>
        </div>
        )
    }
}