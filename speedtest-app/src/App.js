import React, { Component } from 'react';
import Topbar from './components/topbar';
import History from './components/history';
import Panel from './components/panel';

class App extends Component {
  render() {
    return (
      <div className="speedtest">
        <div className="speedtest__container">
          <Topbar />
          <div className="row">
            <div className="speedtest__history">
              <History />
            </div>
            <div className="speedtest__main">
              <Panel />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;