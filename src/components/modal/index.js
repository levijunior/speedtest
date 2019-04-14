import React, { Component } from 'react';
import './modal.scss';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false || this.props.open
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({open: nextProps.open})
  }
  
  render() {
    return(
      <>
        {
          this.state.open ?
            <div className="modal">
              <div className="modal__container">
                <div className="modal__container--close" onClick={() => this.props.handleModal(false)}> + </div>
                {this.props.children}
              </div>
            </div>  
          : ''
        }
      </>
    )
  }
} 

export default Modal;