import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ProductsList from "./../../components/ProductsList";
import ProductItem from "./../../components/ProductItem";
import Message from "./../../method/Message";
import * as action from "./../../actions";

class ProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    this.props.get_all_products();
  }
  onDelete = product_id => {
    if (confirm("Sure to delete?")) { //eslint-disable-line
      try {
        this.props.delete_productReQuest(product_id);
      } catch (error) {
        Message("Lỗi khi xoá<br/>Error: " + error, "error");
      }
    }
  };
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
        return (
          <ProductItem
            pro={product}
            index={index}
            key={product.id}
            onDelete={this.onDelete}
          />
        );
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
    get_all_products: () => {
      dispatch(action.get_all_products());
    },
    delete_productReQuest: product_id => {
      dispatch(action.delete_productReQuest(product_id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsPage);
