import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ProductsList from "./../../components/ProductsList";
import ProductItem from "./../../components/ProductItem";
class ProductsPage extends Component {
  render() {
    let productList = this.props.ListProduct;

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Link to="/products/add" className="btn btn-primary">
              <i className="fas fa-plus"></i>
              &nbsp; Thêm sản phẩm
            </Link>
            <ProductsList>{this.showProductList(productList)}</ProductsList>
          </div>
        </div>
      </div>
    );
  }
  showProductList = productList => {
    if (productList.length > 0) {
      let result = [];

      result = productList.map((product, index) => {
        return <ProductItem pro={product} index={index} />;
      });
      return result;
    }
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    ListProduct: state.Products
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
)(ProductsPage);
