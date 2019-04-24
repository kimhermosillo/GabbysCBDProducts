import React, { Component } from 'react';
export default class Products extends Component {

    render() {


        return (
            <div>
            <div className="filter">
                
                    {`${this.props.count} products found.`}
                </div>
    
                    <label>Choose your filter
               <select className="label" value={this.props.sort} onChange={this.props.handleSortChange}>
                            <option value="">Select</option>
                            <option value="lowestprice">Lowest to highest</option>
                            <option value="highestprice">Highest to lowest</option>
                        </select>
                    </label>
            
            </div>
        )
    }
}
