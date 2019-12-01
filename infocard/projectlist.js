import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    backgroundColor: '#fff',
    backgroundClip: 'border-box',
    border: '1px solid rgba(0,0,0,.125)',
  },
  p:{
    textTransform:'Uppercase',
    margin:0,
  }
}));

const ProjectList = props => {
  const classes = useStyles();
  return (
    <div className="container my-3">
      <Paper className={classes.root}>
        <h3 className="py-2 m-0">Work Experience</h3>
        <div className="row justify-content-center">
          {props.projects.map(project => {
            return (
              <div className="col-md-12 text-center">
                <Card className="card my-2">
                  <CardHeader className="pb-0" 
                  title={project.companyName}  />
                  <p className={classes.p}>{project.Startpoint}- {project.Endpoint}</p>
                  <p className={classes.p}>{project.Role}</p>
                  <CardContent className="pb-0">
                    <div className="row">
                      {project.projects.map(proj => {
                        return (
                          <div className="col-md-3 text-center  my-2">
                            <Card className="card project-card h-100">
                              <CardHeader
                                className=""
                                title={proj.ProjectName}
                                subheader={proj.TechnologyUsed}
                              />
                              Team Size: {proj.TeamSize}
                              <a href={proj.ExternalLink}>Visit Link</a>
                              <CardContent className="pb-0" />
                            </Card>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </Paper>
    </div>
  );
};

export default ProjectList;
