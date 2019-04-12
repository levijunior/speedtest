import React, { Component } from 'react';
import Button from '../button';
import './panel.scss';

class Panel extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
    
  render() {
    return (
      <div className="panel">
        <div className="panel__chart">
          <p className="panel__chart--speed">
            100
          </p> 
          <p className="panel__chart--unit">
            Mbps
          </p> 
        </div>
        <div className="panel__result">
          <div className="panel__result__container">
            <div className="panel__result__speed">
              <p className="panel__result__speed--title">
                <img src="./imgs/icon-download.png" width="27" height="27" alt="" /> Download speed
              </p>
              <p className="panel__result__speed--number">
                <span>90</span> Mbps
              </p>
            </div>
            <hr />
            <div className="panel__result__speed">
              <p className="panel__result__speed--title">
                <img src="./imgs/icon-upload.png" width="27" height="27" alt="" /> Upload speed
              </p>
              <p className="panel__result__speed--number">
                <span>90</span> Mbps
              </p>
            </div>
          </div>
          <div className="panel__result__container">
            <Button 
            text="Restart"
            icon="./imgs/icon-restart.png"/>
          </div>
        </div>

      </div>
    );
  }
}

export default Panel;