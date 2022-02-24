import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";

class Product extends Component {
  // state = {
  //   name: this.props.product.name,
  //   countnum: this.props.product.count,
  // };

  render() {
    return (
      <div>
        <div className="row m-5">
          <div class="card w-25">
            <img src={this.props.product.img} class="card-img-top w-75" alt="..." />
            <div class="card-body">
              <p class="card-text">
                <div className="">
                  <Link to={`/productt/${this.props.product.id}`}>
                    {this.props.product.name}
                  </Link>
                </div>
              </p>

              <h5 class="card-title">
                <div>{this.props.product.count}</div>
              </h5>

              <div
                onClick={() => this.props.onIcreament(this.props.product)}
                className="btn btn-primary btn-lg m-2"
              >
                <i className="fas fa-plus"></i>
              </div>

              <span
                className="m-5 p-3 btn-warning "
                onClick={() => this.props.onDelete(this.props.product)}
              >
                <i className="fas fa-trash-alt"></i>
              </span>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Product;
