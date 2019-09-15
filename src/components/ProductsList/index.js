import React, { Component } from "react";
import { connect } from "react-redux";

class ProductList extends Component {
  render() {
    return (
      <div className="panel panel-success mt-5">
        <div className="panel-heading">
          <h3 className="panel-title">Danh sách sản phẩm</h3>
        </div>
        <div className="panel-body">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã SP</th>
                <th>Tên</th>
                <th>Mô tả</th>
                <th>Giá</th>
                <th>
                  <center>Trạng thái</center>
                </th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>{this.props.children}</tbody>
          </table>
        </div>
        <div className="panel-footer"></div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    // ListProduct: state.Products
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch1: () => {
      dispatch("actionCreator");
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
