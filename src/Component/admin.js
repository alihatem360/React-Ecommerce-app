import React, { Component } from "react";
import { Link } from "react-router-dom";

class Admin extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1> Hello! </h1>
          <button
            className="btn btn-primary px-5"
            onClick={() => this.props.history.replace("/product/new")}
          >
            Add
          </button>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">price</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.props.products.map((p) => (
                <tr>
                  <td>{p.name}</td>
                  <td>
                    <p>{p.count}</p>
                  </td>
                  <td>
                    <Link to={`/product/${p.id}`}>
                      
                      <i
                        className="fas fa-edit"
                        onClick={() => this.props.onEdited(p.id)}
                      ></i>
                    </Link>
                  </td>
                  <td>
                    <span
                      className="px-3 pb-3 pt-2 btn-warning"
                      onClick={() => this.props.onDelete(p)}
                    >
                      <i className="fas fa-trash-alt"></i>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Admin;
