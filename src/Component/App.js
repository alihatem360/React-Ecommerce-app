import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";



import Home from "./home";
import About from "./about";
import NavBar from "./Navbar";
import ShopimgCard from "./shopingCart";
import PProductDitails from "./productditailse";
import Notfound from "./notFound";
import Login from "./Login";
import Admin from "./admin";
import ProoductForm from "./ProductForm"
class App extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const { data } = await axios.get("http://localhost:3000/products");

    this.setState({ products: data });
  }

  handleDelete = async(productitem) => {

    await axios.delete("http://localhost:3000/products/"+productitem.id);
    // console.log(productitem.id);
    const products = this.state.products.filter((p) => p.id !== productitem.id);

    this.setState({ products });
  };

  handleReset = () => {
    console.log("Resetting");
    let newProducts = [...this.state.products];

    newProducts = newProducts.map((p) => {
      p.count = 0;
      return p;
    });

    this.setState({ products: newProducts });
  };

  incrementCount = (num) => {
    const products = [...this.state.products];
    let indexProduct = products.indexOf(num);
    products[indexProduct] = { ...products[indexProduct] };
    // console.log(indexProduct);
    products[indexProduct].count++;
    this.setState({ products });
  };


  handleEdit = (e) => {

    console.log(e);
  }

  render() {
    return (
      <div>
        <NavBar
          productNumber={this.state.products.filter((p) => p.count > 0).length}
        />

        <main className="container">
          <Switch>
            <Route path="/notfound" component={Notfound} />
            <Route path="/home" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/Login" component={Login} />
            <Route path="/product/:id" component={ProoductForm} />

            <Route
              path="/admin"
              render={(props) => (
                <Admin
                  products={this.state.products}
                  {...props}
                  onDelete={this.handleDelete}
                
                />
              )}
            />

            <Route
              path="/productt/:id/:name?"
              render={(props) => (
                <PProductDitails products={this.state.products} {...props} />
              )}
            />
            <Route
              path="/Card"
              render={(props) => (
                <ShopimgCard
                  onDelete={this.handleDelete}
                  onIcreament={this.incrementCount}
                  onReset={this.handleReset}
                  products={this.state.products}
                  {...props}
                />
              )}
            />

            <Redirect from="/home" to="/" />
            <Redirect to="/notfound" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
