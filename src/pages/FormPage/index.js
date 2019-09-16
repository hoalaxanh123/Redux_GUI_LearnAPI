import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "./../../method/Message";
import { connect } from "react-redux";
import * as action from "./../../actions";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtDes: "",
      txtPrice: "",
      txtStatus: "0"
    };
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  BlockSubmitForm = event => {
    event.preventDefault();
    let Product = {
      id: this.state.id,
      name: this.state.txtName,
      des: this.state.txtDes,
      price: this.state.txtPrice,
      status: this.state.txtStatus
    };
    if (!this.props.match) {
      this.props.add_productReQuest(Product);
      this.props.history.goBack();
    } else {
      this.props.update_productReQuest(Product);
      this.props.history.goBack();
    }
  };
  componentDidMount() {
    try {
      if (this.props.match) {
        let id = this.props.match ? this.props.match.params.id : "";
        this.props.get_product_by_id(id);
      }
    } catch (error) {
      Message("Error: " + error);
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.productEditing) {
      let product = nextProps.productEditing;
      if (product) {
        this.setState({
          id: product.id,
          txtName: product.name,
          txtDes: product.des,
          txtPrice: product.price,
          txtStatus: product.status
        });
      } else {
      }
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
            <form onSubmit={this.BlockSubmitForm}>
              <legend>
                <legend>
                  Vui lòng nhập đầy đủ thông tin (
                  {this.props.match ? "Sửa" : "Thêm"})
                </legend>

                <div className="form-group">
                  <div className="form-group">
                    <label>Tên sản phẩm</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="txtName"
                      placeholder="Nhập vào tên sản phẩm"
                      value={this.state.txtName}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <label>Mô tả sản phẩm</label>
                  <textarea
                    id="des"
                    name="txtDes"
                    className="form-control"
                    rows="3"
                    required="required"
                    placeholder="Nhập vào mô tả sản phẩm"
                    onChange={this.onChange}
                    value={this.state.txtDes}
                  ></textarea>
                </div>

                <div className="form-group">
                  <label>Giá thành sản phẩm</label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    placeholder="Nhập vào giá thành của sản phẩm"
                    required
                    name="txtPrice"
                    onChange={this.onChange}
                    value={this.state.txtPrice}
                  />
                </div>
                <div className="form-group">
                  <label>Tình trạng:</label>

                  <select
                    value={this.state.txtStatus}
                    name="txtStatus"
                    id="status"
                    className="form-control"
                    required="required"
                    onChange={this.onChange}
                  >
                    <option value="0">Còn hàng</option>
                    <option value="1">Hết hàng</option>
                    <option value="2">Ngừng kinh doanh</option>
                    {/* <option value="0" selected={this.state.txtStatus==='0'}>Còn hàng</option>
                    <option value="1" selected={this.state.txtStatus==='1'}>Hết hàng</option>
                    <option value="2" selected={this.state.txtStatus==='2'}>Ngừng kinh doanh</option> */}
                  </select>
                </div>
                <Link to="/products" className="btn btn-primary">
                  <i className="fas fa-arrow-circle-left"></i>&nbsp; Trở lại
                </Link>
                <button type="submit" className="btn btn-primary ml-5">
                  <i className="fas fa-download"></i>&nbsp; Lưu xuống
                </button>
                <br />
                <br />
              </legend>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  console.log("object :", state.ProductEditing);
  return {
    productEditing: state.ProductEditing
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    add_productReQuest: product => {
      dispatch(action.add_productReQuest(product));
    },
    update_productReQuest: product => {
      dispatch(action.update_productReQuest(product));
    },
    get_product_by_id: product_id => {
      dispatch(action.get_product_by_id_Request(product_id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
