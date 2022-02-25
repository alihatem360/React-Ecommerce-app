import React, { Component } from "react";
import Product from "./product";

class ShppingCart extends Component {
  render() {
    return (
      <React.Fragment>
        <h1> ShopingCart Here </h1>

        <button className=" btn btn-danger btn-lg" onClick={this.props.onReset}>
          Reset
        </button>

        <div className="row">
          {this.props.products.map((product) => (
            <div class="col-lg-4 col-md-6 my-3">
              <Product
                key={product.id}
                onDelete={this.props.onDelete}
                onIcreament={this.props.onIcreament}
                product={product}
              />
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default ShppingCart;
