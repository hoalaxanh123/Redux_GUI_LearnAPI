import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ProductsList from "./../../components/ProductsList";
import ProductItem from "./../../components/ProductItem";
import callAPI from "./../../utils/callerAPI";
import Message from "./../../method/Message";

class ProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    callAPI("GET", "products", {}).then(res => {
      this.setState({
        products: res.data
      });
    });
  }
  onDelete = id => {
    if (confirm("Sure to delete?")) {      //eslint-disable-line

      try {
        callAPI("DELETE", `products/${id}`, {}).then(res => {
          if(res){
            if (res.status === 200) {
              let products = this.state.products;
              let index = products.findIndex(x => x.id === id);
              products.splice(index, 1);
              Message("Đã xoá thành công<br/>id: " + id, "success");
              this.setState({
                products: products
              });
            } else Message("Lỗi khi xoá<br/>Error code: " + res.status, "error");
          }
        });
      } catch (error) {
        Message("Lỗi khi xoá<br/>Error code: " + error, "error");
      }
    }
  };
  render() {
    let productList = this.state.products;
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
    dispatch1: () => {
      dispatch("actionCreator");
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsPage);
