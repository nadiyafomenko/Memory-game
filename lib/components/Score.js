import React from 'react';

export default function Score(props){
    return(
        <div className = "score-box">
             <span className = "score">Score</span>
            <span className = "score-counter">{ props.score || 0 }</span>
        </div>
    )
}