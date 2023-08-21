import './App.css';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Clock from './components/Clock.js';
// import Modal from './components/Modal.js';
// import Tabs from './components/Tabs.js';
// import items from './components/Tabs.json';
import PokemonForm from './components/pokemon/PokemonForm.js';
import PokemonInfo from './components/pokemon/PokemonInfo.js';

// class App extends Component {

//   state = {
//     showModal: false,
//   }

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal
  //   }))
  // }

//   render() {
//     const { showModal } = this.state;
    
//     return (
//       <div className="App">
//         <button type="button"
//           onClick={this.toggleModal}>Open Modal</button>
        
//         {showModal && (
//           <Modal onClose={this.toggleModal}>
//             <h1>Modal</h1>
//             <h3>Why do we use it?</h3>
//             <p>
//               It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
//             </p>
//             <div>
//               <button type='button'
//                 onClick={this.toggleModal}>X</button>
//             </div>
//           </Modal>
//         )}
//       </div>
//     );
//   }
// }

// class App extends Component {

//   state = {
    
//   }

//   render() {
    
//     return (
//       <div className="App">
//         <Clock />
//         <Tabs items={items} />
//       </div>
//     );
//   }
// }

class App extends Component {

  state = {
    pokemonName: '',
  }

  handleFormSubmit = pokemonName => {
    
    this.setState({ pokemonName });
  }

  render() {
    
    return (
      <div className="App"
        style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <PokemonForm
          handleFormSubmit={this.handleFormSubmit} />
        <ToastContainer autoClose={3000} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
      </div>
    );
  }
}

export default App;
