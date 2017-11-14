import React, {Component} from 'react';
import './Products.css';
import {Link} from "react-router-dom";

class Products extends Component {
  products = [
    {title: 'blerg'},
    {title: 'blerg'},
    {title: 'blerg'},
    {title: 'blerg'},
    {title: 'blerg'},
    {title: 'blerg'}
  ];

  render() {
    return (
      <div className="Products">
        <div class="card-area">
        {this.products.map( product => 
          <div class="card">
            <h1>{product.title}</h1>
            <div></div>
            <div class="add">+</div>
          </div>
        )}
        </div>
      </div>
    );
  }
}

export default Products;