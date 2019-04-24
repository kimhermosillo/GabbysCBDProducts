
import React, { Component } from 'react';
import Products from './components/Products';
import Filter from './components/Filter';
import Basket from './components/Basket';

// import GabbyHeader from './GabbyHeader.png'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { sort: '', cartItems: [], products: [], filteredProducts: [] };
  }
  componentWillMount() {

    if (localStorage.getItem('cartItems')) {
      this.setState({ cartItems: JSON.parse(localStorage.getItem('cartItems')) });
    }

    fetch('http://localhost:8000/products').then(res => res.json())
      .catch(err => fetch('db.json').then(res => res.json()).then(data => data.products))
      .then(data => {
        this.setState({ products: data });
        this.listProducts();
      });
  }

  handleRemoveFromCart = (e, product) => {
    this.setState(state => {
      const cartItems = state.cartItems.filter(a => a.id !== product.id);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { cartItems: cartItems };
    })
  }

  handleAddToCart = (e, product) => {
    this.setState(state => {
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;

      cartItems.forEach(cp => {
        if (cp.id === product.id) {
          cp.count += 1;
          productAlreadyInCart = true;
        }
      });

      if (!productAlreadyInCart) {
        cartItems.push({ ...product, count: 1 });
      }
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { cartItems: cartItems };
    });
  }

  listProducts = () => {
    this.setState(state => {
      if (state.sort !== '') {
        state.products.sort((a, b) =>
          (state.sort === 'lowestprice'
            ? ((a.price > b.price) ? 1 : -1)
            : ((a.price < b.price) ? 1 : -1)));
      } else {
        state.products.sort((a, b) => (a.id > b.id) ? 1 : -1);
      }

      return { filteredProducts: state.products };
    })
  }
  handleSortChange = (e) => {
    this.setState({ sort: e.target.value });
    this.listProducts();
  }



  render() {
    return (
      <container>
     
      <div className="header">
          <h1>Gabby's CBD </h1>
        {/* <img src={GabbyHeader} alt="header"/> */}
        </div>
        
       
       
          <div className="products">
            <Filter count={this.state.filteredProducts.length} handleSortChange={this.handleSortChange}
            />
          
            <Products products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart} />
          </div>
          <div className="cart">
            <Basket cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart} />
          </div>
      
      </container>
    );
  }
}

export default App;