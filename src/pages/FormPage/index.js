import React, { Component } from "react";
import { Link } from "react-router-dom";

class Form extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
            <legend>
              <legend>Vui lòng nhập đầy đủ thông tin</legend>

              <div className="form-group">
                <div className="form-group">
                  <label for="">Tên sản phẩm</label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder="Nhập vào tên sản phẩm"
                  />
                </div>
                <label for="">Mô tả sản phẩm</label>
                <textarea
                  name=""
                  id="input"
                  className="form-control"
                  rows="3"
                  required="required"
                ></textarea>
              </div>

              <div className="form-group">
                <label for="">Giá thành sản phẩm</label>
                <input
                  type="number"
                  className="form-control"
                  id=""
                  placeholder="Nhập vào tên sản phẩm"
                />
              </div>
              <div className="form-group">
                <label for="">Tình trạng:</label>

                <div className="checkbox">
                    <label>
                        <input type="checkbox" value=""/>
                        Còn hàng
                    </label>
                </div>

              </div>
              <Link to='/products' className="btn btn-primary">
              <i className="fas fa-arrow-circle-left"></i>&nbsp;
                Trở lại
              </Link>
              <button type="submit" className="btn btn-primary ml-5">
                <i className="fas fa-download"></i>&nbsp;
                Lưu xuống
              </button>
              <br/>
              <br/>
            </legend>
          </div>
        </div>
      </div>
    );
  }
}
export default Form;
