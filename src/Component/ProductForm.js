import React, { Component } from "react";
import axios from "axios";

class ProductForm extends Component {
  state = {
    id: "",
    name: "",
    count: "",
    img: "",
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    if (id !== "new") {
      const { data } = await axios.get("http://localhost:3000/products/" + id);
      const state = { ...this.state };
      state.name = data.name;
      state.count = data.count;
      this.setState(state);
    }
  }

  handleChange = (e) => {
    let state = { ...this.state };
    state[e.currentTarget.name] = e.currentTarget.value;
    // state[img] = "https://miro.medium.com/max/1400/1*R5ZH1HCDdXzv5tj2UpMDBA.png";
    this.setState(state);
  };



  handleSubmit = async (e) => {
    e.preventDefault();

    // Add
    const id = this.props.match.params.id;
    console.log(id);
    if (id === "new") {
            const object = { ...this.state };
      await axios.post("http://localhost:3000/products", object);
      console.log("submit");
    } else {
  
      const object = { ...this.state, id: 0 };
    //   delete object.id;
      await axios.put(
        "http://localhost:3000/products/"+id,
        object
      );
    }
    // Edit

    this.props.history.replace("/admin");
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1 className="">
            {this.props.match.params.id === "new"
              ? "Add a new product"
              : "Edit product"}
          </h1>

          <form onSubmit={this.handleSubmit}>
            <div className="form-group mt-3">
              <label htmlFor="name" className="mb-2">
                product name{" "}
              </label>
              <input
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
                type="text"
                className="form-control"
                id="name"
              />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="count" className="mb-2">
                product price{" "}
              </label>
              <input
                name="count"
                onChange={this.handleChange}
                value={this.state.count}
                type="text"
                className="form-control"
                id="count"
              />
            </div>

           


            <button type="submit" className="btn btn-primary mt-3">
              {this.props.match.params.id === "new" ? "Add " : "Edit"}
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductForm;
