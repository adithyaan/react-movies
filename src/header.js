import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button';




class Header extends Component{
    constructor(props){
        super(props);
    }
render(){
    return(
    <AppBar position="static">
    <Toolbar>
      <IconButton className = "menuButton"color="inherit" aria-label="Menu">
      </IconButton>
      <Typography variant="h6" color="inherit" className="grow" >
        News
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
    </AppBar>
);
    }
}

export default Header;