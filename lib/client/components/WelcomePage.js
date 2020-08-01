import React from 'react'
import ReactDom from 'react-dom'

import '../styles/style.css'
import '../styles/welcome.css'

function WelcomePage() {
    return(
        <div className = 'container'>
            <h1 className = "title">Hi, ready to check your memory?</h1>
            <form action="/" method = "post" className = 'welcome-form'>
                <button className="btn btn-start">Start</button>
            </form>     
        </div>
      )  
}

ReactDom.render(
    <WelcomePage />,
    document.getElementById('root')
);