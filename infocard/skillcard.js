import React from 'react';

import Card from'@material-ui/core/Card';
import CardHeader from'@material-ui/core/CardHeader';
import CardContent from'@material-ui/core/CardContent';

const Skillcard =(props)=>{
 
return(
  <div className="container">
   <div className="row no-gutters">
  {props.skils[0].myskills.map(myskill => {
  return(
    <div className="col">
    <Card className="card ">
      <CardHeader 
            title={myskill.skill} 
            subheader={myskill.value} 
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