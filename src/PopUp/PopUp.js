import React from 'react';
import ReactModal from 'react-modal';
import Axios from 'axios';
import ReactDOM from 'react-dom';
import "./PopUp.css";

class Popup extends React.Component {
  constructor () {
    super();

    this.handleClickCartPopup = this.handleClickCartPopup.bind(this);
    this.state = {showModal: false };
  
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }


  handleClickCartPopup(product) {
    this.props.handleRemoveFromCart(product);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }



  render () {
    return (
      <div id="popup">
        <button className="checkout" value="Checkout" onClick={this.handleOpenModal}>
        </button>

        <ReactModal id="ruta"
           dialogClassName="test"
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}> 
          Varför logga in på Spotify?
        </ReactModal>
      </div>
    );
  }
}


export default Popup;