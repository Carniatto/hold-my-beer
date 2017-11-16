import React, {Component} from 'react';
import './Products.css';
import RestModelService from "../../Services/Rest/rest-model";

class Products extends Component {

  constructor(props) {
    super(props);
    this.state = {products: [], showMenu: false, cart: []};
  }

  async componentWillMount() {
    const products = await RestModelService.getProducts(this.props.match.params.id);

    this.setState({products});
  }

  handleClick(product, action) {
    let index = this.state.cart.findIndex(p => p.inventoryItemId === product.inventoryItemId );
    let diff = (action === 'add')?+1:-1;
    let cart;
    let item;
    if(index !== -1) {
      let count = this.state.cart[index].count+diff;
      if (count) {
        item = {...this.state.cart[index], count};
        cart = [
          ...this.state.cart.slice(0, index),
          item,
          ...this.state.cart.slice(index+1)
        ];
      } else {
        cart = [
          ...this.state.cart.slice(0, index),
          ...this.state.cart.slice(index+1)
        ];
      }

    } else {
      item = {...product, count: 1};
      cart = [...this.state.cart, item];
    }

      this.setState({cart})
  }

  getTotal() {
    return this.state.cart.reduce(
      (acc, item) => {
        acc += item.price*item.count;
        return acc;
      }, 0
    ).toFixed(2)
  }

  render() {
    return (
      <div className="Products">
        <div className="card-area">
        {this.state.products.map( product =>
          <div className="card"
               key={product.inventoryItemId}
               style={{backgroundImage:`url(${product.imageUrl})`}}>
            <h1>{product.title}</h1>
            <div className="remove" onClick={this.handleClick.bind(this, product, 'remove')}>-</div>
            <div className="price">R${product.price}</div>
            <div className="add" onClick={this.handleClick.bind(this, product, 'add')}>+</div>
          </div>
        )}
        </div>
        
          {(this.state.cart.length)?
            <div className="side-menu">
              {this.state.cart.map(item =>
                <div key={item.inventoryItemId}>
                  <p className="title">{item.title}</p>
                  <p className="count">{item.count}</p></div>
              )}
              <hr/>
              <div className="total"><b>TOTAL: </b>R${this.getTotal()}</div>
            </div>
            : ''}
      </div>
    );
  }
}

export default Products;