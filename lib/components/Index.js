import React from 'react';
import ReactDom from 'react-dom';
import { Grid } from '@material-ui/core';
import cards from '../constants/const'
import '../styles/style.css';


class Card extends React.Component {


  render() {
    return (
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front"></div>
          <div className="flip-card-back">
            <img src = { this.props.img } />
          </div> 
        </div>
      </div>
    );
  }
} 

function App() {
  return (
    <Grid container spacing = { 5 }>
      {[ ...cards ].map((value) => (
        <Grid container item xs = { 2 } spacing = { 3 } >
          <Card img = { value }> </Card>
        </Grid>
      ))}
    </Grid>
  );
}



ReactDom.render(
  <App />,
  document.getElementById('root')
);
