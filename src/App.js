import React, { Component } from 'react';
import Topbar from './components/topbar';
import History from './components/history';
import Panel from './components/panel';
import LocalstorageService from './services/localstorage.service';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      history: []
    };
  }

  componentDidMount() {
    this.updateHistory();
  }

  updateHistory = () => {
    let history = LocalstorageService.get('history');
    this.setState({ history })
  }
  
  render() {
    return (
      <div className="speedtest">
        <div className="speedtest__container">
          <Topbar />
          <div className="row">
            <div className="speedtest__history">
              <History
              history={this.state.history} />
            </div>
            <div className="speedtest__main">
              <Panel 
              updateHistory={this.updateHistory}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;