import React from 'react';
import ReactDom from 'react-dom';

import '../styles/style.css';

import Background from './Background'

function Register(){
    return(
        <div className = 'container easy-container'>
            <form className ="register-form" action = "/register" method="POST">
                <h2 className="title">Register</h2>
                <input type="text" name="name" className="input" placeholder="Full name" />
                <input type="email" name="email" className="input"  placeholder="E-mail" />
                <input type="password" name = "password" className="input"  placeholder="Password" ></input>
                <div className="links">
                    <a href="/login">Already have an account?</a>
                </div>
            <button className="btn-submit" type = "submit"> Submit </button>
            </form>
            <Background />
        </div> 
    )
}

ReactDom.render(
    <Register />,
    document.getElementById('root')
  );