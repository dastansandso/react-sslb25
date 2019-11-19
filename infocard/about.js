import React from 'react';
import Card from'@material-ui/core/Card';
import CardHeader from'@material-ui/core/CardHeader';
import CardContent from'@material-ui/core/CardContent';
const Aboutcard =(props)=>{
  // console.log(props.info[0])
  return(
    <div className="container mt-3">
      <Card className="card">
      <CardHeader 
            title={props.info[0].username} 
            subheader={props.info[0].role} 
        />
      <CardContent>
      <p>{props.info[0].intro}</p>
      </CardContent>
        
    </Card>
 
    </div>
  );
}

export default Aboutcard;