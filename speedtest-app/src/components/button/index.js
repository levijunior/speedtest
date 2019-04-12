import React from 'react';
import './button.scss';

const Button = (props) => {
  return(
    <div className="button" onClick={() => props.restart() } >
      {props.text} <img src={props.icon} alt="" />
    </div>  
  )
} 

export default Button;