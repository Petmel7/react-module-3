import './App.css';
import { Component } from 'react';
import { ProductList } from './components/ProductList.js';
import Form from './components/Form.js';

class App extends Component {

  state = {
    counter: 0,
    isOpen: false,
    allProducts: []
  }

  // const product = {
  //   id:,
  // }

  componentDidUpdate(prevProps, prevState) { 
    console.log(`UPDATE`)
  } 

  componentDidMount() {
    console.log(`MOUNT`)
  }

  componentWillUnmount() {
    console.log(`UNMOUNT`)
  }
  
  addNewProduct = obj => {
    this.setState(prevState => ({
      allProducts: [...prevState.allProducts, obj]
    }))
  }

  deleteProduct = () => {
    console.log(`DELETE`)
  }

  render() {
    console.log(`Render method`)
    return (
      <div className="App">
        <h1>Module-3</h1>
        <Form />
        <ProductList
          products={this.state.products}
          onDeleteProduct={this.deleteProduct} />
      </div>
  );
  }
}

export default App;
