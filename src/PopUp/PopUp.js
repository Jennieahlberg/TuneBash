import React from 'react';
import ReactModal from 'react-modal';
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
        <button className="popupButton" onClick={this.handleOpenModal}>FAQ
        </button>

        <ReactModal id="popup"
           dialogClassName="test"
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           style={{
            overlay: {
              backgroundColor: 'linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)'
              
            },
            content: {
              color: 'black',
              backgroundColor: 'papayawhip',        
            }
            
          }}> 
         <p> 
           För att kunna spela hela låtar så måste du logga in på Spotify, annars spelas låtarna endast i 30 sekunder.
           För att kunna spela hela låtar så måste du logga in på Spotify, annars spelas låtarna endast i 30 sekunder.
           För att kunna spela hela låtar så måste du logga in på Spotify, annars spelas låtarna endast i 30 sekunder.
           För att kunna spela hela låtar så måste du logga in på Spotify, annars spelas låtarna endast i 30 sekunder.
           För att kunna spela hela låtar så måste du logga in på Spotify, annars spelas låtarna endast i 30 sekunder.
           För att kunna spela hela låtar så måste du logga in på Spotify, annars spelas låtarna endast i 30 sekunder.
           För att kunna spela hela låtar så måste du logga in på Spotify, annars spelas låtarna endast i 30 sekunder.
           För att kunna spela hela låtar så måste du logga in på Spotify, annars spelas låtarna endast i 30 sekunder.
           För att kunna spela hela låtar så måste du logga in på Spotify, annars spelas låtarna endast i 30 sekunder.
           För att kunna spela hela låtar så måste du logga in på Spotify, annars spelas låtarna endast i 30 sekunder.
           För att kunna spela hela låtar så måste du logga in på Spotify, annars spelas låtarna endast i 30 sekunder.
           För att kunna spela hela låtar så måste du logga in på Spotify, annars spelas låtarna endast i 30 sekunder.
           För att kunna spela hela låtar så måste du logga in på Spotify, annars spelas låtarna endast i 30 sekunder.
           </p>
         <div className="closeDiv">
         <button className="closeButton" onClick={this.handleCloseModal}>Stäng</button>
         </div>
        </ReactModal>
      </div>
    );
  }
}


export default Popup;