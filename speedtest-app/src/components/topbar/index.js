import React, { Component } from 'react';
import Modal from '../modal';
import './topbar.scss';

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      name: ''
    }
  }

  componentDidMount() {
    this.getName();
  }

  getName = () => {
    let name = localStorage.getItem('name')
    if(name) {
      this.setState({name})
    }
  }

  handleModal = (open) => {
    this.setState({open})
  }

  handleInput = (event) => {
    let name  = event.target.value
    this.setState({name});
    localStorage.setItem('name', name)
  }
  
  render() {
    return(
      <div className="topbar">
        <div className="topbar__logo">
          <img src="./imgs/speedtest.png" alt="" />
        </div>
        <div className="topbar__avatar">
          <div className="topbar__avatar--edit" onClick={ () => this.handleModal(true) }> 
            Editar
          </div>
          <div className="topbar__avatar--name">
            {this.state.name}
          </div>
          <div className="topbar__avatar--img">
            <img src="./imgs/avatar.png" alt="" />
          </div>
        </div>

        <Modal
          open={this.state.open}
          handleModal={this.handleModal}
        >
          <div className="name-changer">
            <input type="text" value={this.state.name}  onChange={this.handleInput} />
            <button onClick={ () => this.handleModal(false) }>OK</button>
          </div>
        </Modal>
      </div>  
    )
  }
} 

export default Topbar;