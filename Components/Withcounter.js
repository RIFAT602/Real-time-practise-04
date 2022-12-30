import React from "react";
const Withcounter=(OriginalComponent)=>{
    class New extends React.Component{
        state={count:0};

    incrementCount=()=>{
        this.setState((pre)=>({
            count:pre.count+1
        }));
    

    }
  render(){
      const{count}=this.state

  return <OriginalComponent  count={count} incrementCount={this.incrementCount}/>

  }} 
  return New

} 
export default Withcounter;