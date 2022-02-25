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
      <React.Fragment>
        <div className="">
          <div class="card border border-3">
           <div className="w-100"> 
              <img src={this.props.product.img} className="card-img-top w-100 h-100" />
           </div>
            <div className="card-body">
              <p className="card-text">
                <Link to={`/productt/${this.props.product.id}`}>
                  {this.props.product.name}
                </Link>
              </p>

              <h5 class="card-title">
                <div>{this.props.product.count}</div>
              </h5>

              <div
                onClick={() => this.props.onIcreament(this.props.product)}
                className="btn btn-primary btn-lg "
              >
                <i className="fas fa-plus"></i>
              </div>

              <span
                className=" btn btn-warning btn-lg float-end"
                onClick={() => this.props.onDelete(this.props.product)}
              >
                <i className="fas fa-trash-alt"></i>
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Product;
