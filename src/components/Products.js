
import React, { Component } from 'react';
import util from '../util'
export default class Products extends Component {

    render() {
        const productItems = this.props.products.map(product => (
            <div className="products" key={product.id}>
               
                    <a href={`#${product.id}`}onClick={(e)=>this.props.handleAddToCart(e, product)}>
                        <img src={`products/${product.sku}_2.jpg`} alt={product.title} />
                        <p>{product.title}</p>    
                        <p>{product.description}</p>                    
                    
                    <b>{util.formatCurrency(product.price)}</b>
                    </a>
                    <button onClick={(e)=>this.props.handleAddToCart(e, product)}>I want it!</button>
                
            </div>
        ));

        return (
            <div className="inbasket">
                {productItems}
            </div>
        )
    }
}