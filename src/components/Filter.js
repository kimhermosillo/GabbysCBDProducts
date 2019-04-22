import React, { Component } from 'react';
export default class Products extends Component {

    render() {


        return (
            <div className="filter">
                
                    {`${this.props.count} products found.`}
                
    
                    <label>Choose your filter
               <select className="filter" value={this.props.sort} onChange={this.props.handleSortChange}>
                            <option value="">Select</option>
                            <option value="lowestprice">Lowest to highest</option>
                            <option value="highestprice">Highest to lowest</option>
                        </select>
                    </label>
            
            </div>
        )
    }
}
