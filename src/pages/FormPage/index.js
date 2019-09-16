import React, { Component } from "react";
import { Link } from "react-router-dom";
import callAPI from "./../../utils/callerAPI";
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
        callAPI("GET", `products/${id}`, {}).then(res => {
          if (res.data) {
            this.setState({
              id: res.data.id,
              txtName: res.data.name,
              txtDes: res.data.des,
              txtPrice: res.data.price,
              txtStatus: res.data.status
            });
          }
        });
      } else {
      }
    } catch (error) {
      Message("Error: " + error);
    }
  }
  render() {
    //TODO: LOAD INFOMATION PRODUCT
    //Link: https://www.youtube.com/watch?v=lvoKyI5u58w&list=PLJ5qtRQovuEOoKffoCBzTfvzMTTORnoyp&index=97
    let idPro = this.props.match ? this.props.match.params.id : "";
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
            <form onSubmit={this.BlockSubmitForm}>
              <legend>
                <legend>
                  Vui lòng nhập đầy đủ thông tin (
                  {idPro === "" ? "Thêm" : "Sửa"})
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
  return {
    prop: state.prop
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    add_productReQuest: product => {
      dispatch(action.add_productReQuest(product));
    },
    update_productReQuest: product => {
      dispatch(action.update_productReQuest(product));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
