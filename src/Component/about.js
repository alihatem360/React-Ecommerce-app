import React, { Component } from "react";
import { Link, Route , Switch} from "react-router-dom";
import Company from "./company";
import Team from "./team";

class Aboute extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>From about component </h1>
        <div className="row">
          <div className="col-3"></div>
          <ul>
            <li>
              <Link to="/about/team"> our team</Link>
            </li>
            <li>
              <Link to="/about/company"> our company</Link>
            </li>
          </ul>
          <div className="col">
            <Switch>
              <Route path="/about/team" component={Team} />
              <Route path="/about/company" component={Company} />
            </Switch>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Aboute;
