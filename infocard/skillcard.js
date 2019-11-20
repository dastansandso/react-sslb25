import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Card from'@material-ui/core/Card';
import CardHeader from'@material-ui/core/CardHeader';
import CardContent from'@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const Skillcard =(props)=>{
  const classes = useStyles();

return(
  <div className="container my-3">
  <Paper className={classes.root}>
  <h3 className="py-2 m-0">Tools/Skills Compatibility</h3>
   <div className="row justify-content-center">
  {props.skils[0].myskills.map(myskill => {
  return(
    <div className="col-4 col-md-2 text-center">
    <Card className="card skill-card my-2">
    <CardContent className="pb-0">
        <CircularProgressbar value={myskill.value} text={myskill.value} />
        
        </CardContent>
      <CardHeader className="pt-0"
            title={myskill.skill}
        />
        
    </Card>
    </div>
  )
})}
  </div>
  </Paper>
  </div> 
)

}

export default Skillcard;