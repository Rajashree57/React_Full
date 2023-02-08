import React from 'react';
import  ReactDOM  from 'react-dom';


//function Greeting(){
  //return <h2> WELCOME TO FIRST REACT PAGE...!</h2>
//}
function Greeting(){
  return React.createElement('h2', {},'welcome To prostack') 
}
//render will takes 2 parameters
// 1. where you to do render
// 2. what you have to render

ReactDOM.render(<Greeting/>, document.getElementById("root"));