import React from 'react';
import ReactDom from 'react-dom';

import '../styles/style.css';

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
    <form className="register-form" action="/login" method="POST">
      <h2 className="title">Log in</h2>
      <div className="input-field">
        <input type="email" name="email" className="input"  placeholder="E-mail"  value={this.state.value} onChange={this.handleChange}/>
      </div>
      <input type="password" name = "password" className="input"  placeholder="Password" ></input>
      <div className="links">
        <a href="#">Forgot password?</a>
        <a href="/register">Register</a>
      </div>
      <input type="submit" value="Log In"/>
      {/* <button className="btn-submit" type = "submit" value="Log In"> Submit </button> */}
    </form>
    )
  }
}

ReactDom.render(
    <Login />,
    document.getElementById('root')
);