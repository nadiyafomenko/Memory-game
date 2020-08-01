import React from 'react'
import ReactDom from 'react-dom'

import '../styles/style.css'
import '../styles/login.css'

class Login extends React.Component {
  constructor(){
    super()

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      value: ''
    }
}

handleChange(event) {
    this.setState({value: event.target.value});
}

render(){
  return(
    <div className = 'container'>
      <form className="register-form" action="/login" method="POST">
        <h2 className="title">Log in</h2>
        <div className="input-field">
          <input type="email" name="email" className="input"  placeholder="E-mail"  value={this.state.value} onChange={this.handleChange}/>
        </div>
        <input type="password" name = "password" className="input"  placeholder="Password" ></input>
        <button className="btn btn-form" type = "submit" value="Log In"> Submit </button>
        <div >
          <a className="link" href="#">Forgot password?</a>
          <a className="link" href="/register">Register</a>
        </div>
      </form>
    </div>
    )
  }
}

ReactDom.render(
    <Login />,
    document.getElementById('root')
);