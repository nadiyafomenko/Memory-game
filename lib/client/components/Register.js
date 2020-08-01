import React from 'react';
import ReactDom from 'react-dom';

import '../styles/style.css';
import '../styles/register.css';

function Register(){
    return(
        <div className = 'container'>
            <form className ="register-form" action = "/register" method="POST">
                <h2 className="title">Register</h2>
                <input type="text" name="name" className="input" placeholder="Full name" />
                <input type="email" name="email" className="input"  placeholder="E-mail" />
                <input type="password" name = "password" className="input"  placeholder="Password" ></input>
                <button className="btn btn-form" type = "submit"> Submit </button>
                <a className="link" href="/login">Already have an account?</a>
            </form>
        </div> 
    )
}

ReactDom.render(
    <Register />,
    document.getElementById('root')
  );