import React from 'react';
import ReactDom from 'react-dom';
 
//styles
import '../styles/style.css';
import 'bootstrap';

//components
import GameControl from './GameControl';

class App extends React.Component {
  render(){
    return (
      <div>
        <GameControl />
      </div>
    );
  }
}

ReactDom.render(
  <App />,
  document.getElementById('root')
);
