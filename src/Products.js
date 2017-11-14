import React, {Component} from 'react';
import './Products.css';
import {Link} from "react-router-dom";

class Products extends Component {
  render() {
    return (
      <div className="Products">
        <h1>It's alive! {'Products'} {JSON.stringify(this.props.match)}</h1>
        <Link to="/">home</Link>
      </div>
    );
  }
}

export default Products;