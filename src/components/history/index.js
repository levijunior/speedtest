import React, { Component } from 'react';
import Item from './item';
import './history.scss';

class History extends Component {
  constructor(props){
    super(props);
    this.state = {
      history: []
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({history:nextProps.history.slice(0,2)})
  }

  render() {
    return (
      <div className="history">
        <h2>Histórico</h2>

        <div className="history__container">
          
          {
            this.state.history.length > 0 ?  
              this.state.history.map((item, key) => 
                <Item 
                  key={key}
                  date={item.date}
                  download={item.download}
                  upload={item.upload}
                />
              )
            : 'Nenhum resultado encontrado'  
          }

        </div>

        <button className="button--more" onClick={ () => alert('Funcionalidade em contrução') }> + </button>
      </div>
    );
  }
}

export default History;