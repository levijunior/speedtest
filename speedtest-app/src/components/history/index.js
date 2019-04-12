import React, { Component } from 'react';
import Item from './item';
import './history.scss';

class History extends Component {
  render() {
    return (
      <div className="history">
        <h2>Histórico</h2>

        <div className="history__container">
          
          <Item 
            date="11/04/2019 - 10h39m"
            download="100"
            upload="90"
          />
          <Item 
            date="11/04/2019 - 10h39m"
            download="100"
            upload="90"
          />

        </div>

        <button className="button--more" onClick={ () => alert('Funcionalidade em contrução') }> + </button>
      </div>
    );
  }
}

export default History;