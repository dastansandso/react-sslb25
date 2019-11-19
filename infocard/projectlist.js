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


const ProjectList =(props)=>{

 const classes = useStyles();
return(
  <div className="container my-3">
  <Paper className={classes.root}>
   <h3 className="py-2 m-0">Work Experience</h3>
   <div className="row justify-content-center">
  {props.projects.map(project => {
  return(
    <div className="col-md-12 text-center">
    <Card className="card my-2">
   
      <CardHeader className="pb-0"
            title={project.companyName}
        />
         <CardContent className="pb-0">
         <div className="row">
        {project.projects.map(proj=>{
          return(
             <div className="col-md-4 text-center  my-2">
 <Card className="card h-100">
 <CardHeader className="pt-0"
            title={proj.ProjectName}
            subheader={proj.TechnologyUsed}
        />
       Team Size: {proj.TeamSize}
        <a href={proj.ExternalLink} >Visit Link</a>
         <CardContent className="pb-0">
   </CardContent>
   </Card>
    </div>
          )
        })}
        </div>
        </CardContent>
        
    </Card>
    </div>
  )
})}
  </div>
  </Paper>
  </div> 
)

}

export default ProjectList;