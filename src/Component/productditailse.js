import React, { Component } from "react";

import qs from "query-string";

class ProductDitails extends Component {
  hadelSave = () => {
    console.log("save changes ");
    this.props.history.replace("/Card");
  };

  render() {
    /// filter the id product
    const productitem = this.props.products.filter(
      (p) => p.id === parseInt(this.props.match.params.id)
    )[0];

    // query string
    const result = qs.parse(this.props.location.search);

    // console.log(result);

    //   console.log(props.match);
    //   console.log(props);
    //   console.log(props.products[0].name);

    //   console.log(productitem);

    //   console.log(parseInt(props.match.params.id));
    // console.log(props.location.search);
    return (
      <React.Fragment>
        <h1> hello from productDitails NO.{this.props.match.params.id}</h1>
        <h1 className="">{productitem.name}</h1>
        <h1 className="">{productitem.id}</h1>
        <button className="btn btn-danger btn-lg" onClick={this.hadelSave}>
          save changes
        </button>
      </React.Fragment>
    );
  }
}

export default ProductDitails;
