import React, { Component } from 'react';
import Button from '../button';
import { average } from '../../helpers';
import SpeedService from '../../services/speed.service';
import LocalstorageService from '../../services/localstorage.service';
import './panel.scss';

class Panel extends Component {
  constructor(props){
    super(props);
    this.state = {
      limit:{
        time: 10000, 
        interval: 500
      },
      speed: 0,
      download: [],
      upload: [],
      average: {
        download: null,
        upload: null
      },
      restart: false
    };
  }

  componentDidMount() {
    this.speedTest();
  }

  speedTest = () => {
    this.intervalDownload = setInterval(this.calculateDownloadSpeed, this.state.limit.interval);
  }

  restartTest = () => {
    this.setState({
      download: [],
      upload: [],
      average: {
        download: null,
        upload: null
      },
      restart: false
    })
    this.props.updateHistory();
    this.speedTest();
  }

  calculateDownloadSpeed = () => {
    let speed = SpeedService.checkDownloadSpeed();
    let download = this.state.download.concat(speed);
    this.setState({speed, download});
    this.stopCalculate('download', this.intervalDownload);
  }

  calculateUploadSpeed = () => {
    let speed = SpeedService.checkUploadSpeed();
    let upload = this.state.upload.concat(speed);
    this.setState({speed, upload});
    this.stopCalculate('upload', this.intervalUpload);
  }

  stopCalculate = (test_type, intervalFunction) => {
    if(this.state[test_type].length >= (this.state.limit.time/this.state.limit.interval)) {
      clearInterval(intervalFunction)
      this.calculateAverage(test_type);

      if(test_type === 'download') {
        this.intervalUpload = setInterval(this.calculateUploadSpeed, this.state.limit.interval);
      }
      if(test_type === 'upload') {
        this.setState({restart: true});
        this.setHistoryLocalstorage();
      }
    }
  }

  calculateAverage = (test_type) => {
    let array_type = this.state[test_type]
    this.setState({ 
      average: { 
        ...this.state.average,
        [test_type]: average(array_type) 
      }
    })
  }

  setHistoryLocalstorage = () => {
    let averageObj = {date: new Date(), download: this.state.average.download, upload: this.state.average.upload};
    let history = LocalstorageService.get('history');
    let updateHistory = history ? history : [];
    updateHistory.unshift(averageObj); 
    LocalstorageService.set('history', JSON.stringify(updateHistory));
  }

    
  render() {
    return (
      <div className="panel">
        <div className="panel__chart">
          <p className="panel__chart--speed animated bounceInUp">
            {this.state.speed}
          </p> 
          <p className="panel__chart--unit animated bounceInUp">
            Mbps
          </p> 
        </div>
        <div className="panel__result">
          <div className="panel__result__container">
            <div className="panel__result__speed">
              <p className="panel__result__speed--title">
                <img src="./imgs/icon-download.png" width="27" height="27" alt="" /> Download speed
              </p>
              {
                this.state.average.download ?
                  <p className="panel__result__speed--number animated fadeInDown">
                    <span>{ this.state.average.download }</span> Mbps
                  </p>
                : ''
              }
            </div>
            <hr />
            <div className="panel__result__speed">
              <p className="panel__result__speed--title">
                <img src="./imgs/icon-upload.png" width="27" height="27" alt="" /> Upload speed
              </p>
              {
                this.state.average.upload ?
                  <p className="panel__result__speed--number animated fadeInUp">
                    <span>{ this.state.average.upload }</span> Mbps
                  </p>
                : ''
              }
            </div>
          </div>
          {
            this.state.restart ?
              <div className="panel__result__container animated bounceInUp delay-1s">
                <Button 
                  restart={this.restartTest}
                  text="Restart"
                  icon="./imgs/icon-restart.png"
                />
              </div>
            : ''
          }
        </div>

      </div>
    );
  }
}

export default Panel;