import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as action from "../action/action";

class product extends Component {
  render() {
    const delFn = this.props.deleteproductAtStore;
    return (
      <div className="card">
        <div className="card-header">Name: {this.props.data.name}</div>
          <img
            src={this.props.data.image}
            style={{ height: "200px", width: "250px" }}
          />
        <div className="card-body">
          Detail : {this.props.data.detail}
          <br/>
          Price : {this.props.data.Price}
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(null, mapDispatchToProps)(product);
