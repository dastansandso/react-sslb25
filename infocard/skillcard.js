import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Card from'@material-ui/core/Card';
import CardHeader from'@material-ui/core/CardHeader';
import CardContent from'@material-ui/core/CardContent';

const Skillcard =(props)=>{
 
return(
  <div className="container">
   <div className="row justify-content-center">
  {props.skils[0].myskills.map(myskill => {
  return(
    <div className="col-2 text-center">
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
  </div> 
)

}

export default Skillcard;