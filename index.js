import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from 'react-dom';
import Hello from './Hello';
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
    
    return (
      <div className={useStyles.root}>
       <AppBar className=" headerbar "  position="fixed">
                <Toolbar variant="dense">
                    <IconButton edge="start" className={useStyles.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> 
                    <div className={useStyles.title}>
                        Header
                    </div>
                    <Button><a  color="primary" >Login</a></Button>
                    <Button><a  color="primary" >Register</a></Button>
                </Toolbar>
            </AppBar>
      <div className="card p-2 mt-5">
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
