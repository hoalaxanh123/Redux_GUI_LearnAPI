import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Routers from "./Routers/Routers";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions/index";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Routers />
        </div>
      </div>
    </Router>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    // prop: state.prop
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch1: () => {
      dispatch(actions.LIST_GETALL())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
