import React from 'react';
import ReactDom from 'react-dom';

import '../styles/style.css';

function Register(){
    return(
        <form className ="register-form" action = "/register" method="POST">
            <h2 className="title">Register</h2>
            <input type="text" name="name" className="input" placeholder="Full name" />
            <input type="email" name="email" className="input"  placeholder="E-mail" />
            <input type="password" name = "password" className="input"  placeholder="Password" ></input>
            <div className="links">
                <a href="/">Already have an account?</a>
            </div>
            <button className="btn-submit" type = "submit"> Submit </button>
        </form>
    )
}

ReactDom.render(
    <Register />,
    document.getElementById('root')
  );