import React from 'react';
import './button.scss';

const Button = (props) => {
  return(
    <button className="button">
      Restart <img src="./imgs/icon-restart.png" alt="" />
    </button>  
  )
} 

export default Button;