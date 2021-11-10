import React, { Component } from "react";
import { _getProducts } from "./data/_DATA";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import ALLGALLARY from "./component/AllGallary";
import Nav from "./component/Nav";
import Home from "./component/Home";
import Switch from "react-bootstrap-v5/lib/esm/Switch";
import GALLARY from "./component/Gallary";

class App extends Component {
  state = {
    allBroducts: [],
  };
  componentDidMount() {
    _getProducts().then((prouducts) => {
      this.setState({
        allBroducts: prouducts,
      });
    });
  }
  //

  render() {
    // console.log(this.state.allBroducts);
    return (
      <>
        {this.state.allBroducts.length <= 0 ? (
          <div className="cont">
            <div className="spinner-border center text-danger" role="status">
              <span className="spin center sr-only"></span>
            </div>
          </div>
        ) : (
          <Router>
            <Nav />

            <Route
              exact
              path="/"
              // children={<Home allBroducts={this.state.allBroducts} />}
              // component={Home}
            >
              <Home allBroducts={this.state.allBroducts} />
            </Route>
            <Route
              path="/gallary"
              children={<GALLARY allBroducts={this.state.allBroducts} />}
            />
            <Switch>
              <Route
                path="/:pid"
                children={<ALLGALLARY allpro={this.state.allBroducts} />}
              />
            </Switch>
          </Router>
        )}
      </>
    );
  }
}

export default App;
