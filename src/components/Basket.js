import React, { Component } from 'react';
import util from '../util'
export default class Basket extends Component {
    render() {
        const { cartItems } = this.props;

        return (
            <div className="filter">
                {cartItems.length === 0
                    ? "Basket is empty" :
                    <div>You have {cartItems.length} items in the basket.</div>
                }
                {cartItems.length > 0 &&
                    <div>
                        <ul style={{ marginLeft: -25 }}>
                            {cartItems.map(item => (
                                <li key={item.id}>
                                    <b>{item.title}</b>
                                    <button style={{ float: 'right' }}
                                        onClick={(e) => this.props.handleRemoveFromCart(e, item)}>REMOVE</button>
                                    <br />
                                    {item.count} REMOVE {util.formatCurrency(item.price)}
                                </li>))
                            }
                        </ul>

                        <b>Total: {util.formatCurrency(cartItems.reduce((a, c) => (a + c.price * c.count), 0))}
                        </b>
                        <button onClick={() => alert('Todo: Implement checkout page.')} className="btn btn-primary">checkout</button>
                    </div>
                }
            </div>
        )
    }
}
