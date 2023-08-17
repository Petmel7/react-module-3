import './App.css';
import { Component } from 'react';
import Modal from './components/Modal.js';

class App extends Component {

  state = {
    showModal: false,
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }))
  }

  render() {
    const { showModal } = this.state;
    
    return (
      <div className="App">
        <button type="button"
          onClick={this.toggleModal}>Open Modal</button>
        
        {showModal && (
          <Modal>
            <button type='button'
              onClick={this.toggleModal}>X</button>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
