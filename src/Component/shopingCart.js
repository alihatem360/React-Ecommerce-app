import React, { Component } from "react";
import Product from "./product";

class ShppingCart extends Component {
  // state = {
  //   products: [
  //     { id: 1, name: "ali", count: 15 },
  //     { id: 2, name: "abdo", count: 12 },
  //     { id: 3, name: "samy", count: 11 },
  //     { id: 4, name: "ramadan", count: 1 },
  //   ],
  // };

  // handleDelete = (productitem) => {
  //   const products = this.state.products.filter((p) => p.id !== productitem.id);

  //   this.setState({ products });
  // };

  // handleReset = () => {
  //   console.log("Resetting");
  //   let newProducts = [...this.state.products];

  //   newProducts = newProducts.map((p) => {
  //     p.count = 0;
  //     return p;
  //   });

  //   this.setState({ products: newProducts });
  // };

  // incrementCount = (num) => {
  //   const products = [...this.state.products];
  //   let indexProduct = products.indexOf(num);
  //   products[indexProduct] = {...products[indexProduct]};

  //   products[indexProduct].count++;
  //   this.setState({ products});
  // };

  render() {
    return (
      <React.Fragment>
        <h1> ShopingCart Here </h1>

        <div className="m-5 btn btn-danger btn-lg" onClick={this.props.onReset}>
          Reset
        </div>
        
        {this.props.products.map((product) => (
          <Product
            key={product.id}
            onDelete={this.props.onDelete}
            onIcreament={this.props.onIcreament}
            product={product}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default ShppingCart;
