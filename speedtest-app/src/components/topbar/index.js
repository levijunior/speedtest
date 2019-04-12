import React from 'react';
import './topbar.scss';

const Topbar = () => {
  return(
    <div className="topbar">
      <div className="topbar__logo">
        <img src="./imgs/speedtest.png" alt="" />
      </div>
      <div className="topbar__avatar">
        <div className="topbar__avatar--name">
          Levi Lessa
        </div>
        <div className="topbar__avatar--img">
          <img src="./imgs/avatar.png" alt="" />
        </div>
      </div>
    </div>  
  )
} 

export default Topbar;