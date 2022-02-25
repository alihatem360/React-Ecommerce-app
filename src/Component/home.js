import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: "https://images.unsplash.com/photo-1584585696759-1df9872e1eca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    };
  }
  render() {
    return (
      <div>
        <h1> from Home</h1>
        <div class="container">
          <img src={this.state.img} className="w-100 h-75"/>
        </div>
      </div>
    );
  }
}

export default Home;
