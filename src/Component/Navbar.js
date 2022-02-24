import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbae = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item activ">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        
          <li className="nav-item">
            <Link className="nav-link" to="/Card">
              Shoping Card
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/Login">
              Log in
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/admin">
              Admin
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/product/new">
              product new
            </Link>
          </li>
        </ul>

        <span className="btn btn-warning float-right">
          <h3>{props.productNumber}</h3>
        </span>
      </nav>
    </React.Fragment>
  );
};

export default Navbae;
