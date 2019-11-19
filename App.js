import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from 'react-dom';
import Aboutcard from './infocard/about';
import Profileinfo from './data/data';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './style.css';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textAlign: 'left',
    },

}));


class App extends Component {
  
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    // console.log()
    return (
      <div className={useStyles.root}>
       <AppBar className=" headerbar "  position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" className={useStyles.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> 
                    <div className={useStyles.title}>
                        Dhiraj Patil
                    </div>                   
                </Toolbar>
            </AppBar> 
            <Aboutcard info={Profileinfo.aboutinfo}/>     
        </div>
    );
  }
}

export default App;