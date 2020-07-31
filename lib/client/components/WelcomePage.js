import React from 'react'
import ReactDom from 'react-dom'

import '../styles/style.css'

import Background from './Background'

function WelcomePage() {
    return(
        <div className = 'container easy-container'>
            <h1 className = "title">Hi, ready to check your memory?</h1>
            <form action="/" method = "post" className = 'welcome-form'>
                <button className="btn btn-primary btn-start">Start</button>
            </form>     
            <Background />
        </div>
      )  
}

ReactDom.render(
    <WelcomePage />,
    document.getElementById('root')
);