import React from 'react';
import { Grid, Button } from '@material-ui/core';

export default class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          
        };
    }
    render(){
        return(
        <div>
           <Button variant="contained" color="primary" onClick = { this.props.onClick }> Start </Button>
        </div>
        )
    }
}