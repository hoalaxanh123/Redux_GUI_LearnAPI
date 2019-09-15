import React, { Component } from "react";
import { Link } from "react-router-dom";
import GetStatus from "./../../method/GetStatus";
import GetStatusClass from "./../../method/GetStatusClass";
class ProductItem extends Component {
  render() {
    let pro = this.props.pro;
    let index = this.props.index;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{pro.id}</td>
        <td>{pro.name}</td>
        <td>{pro.des}</td>
        <td>{pro.price}</td>
        <td>
          <center>
            <span className={GetStatusClass(pro.status)}>
              {GetStatus(pro.status)}
            </span>
          </center>
        </td>
        <td>
          <Link to={`/products/edit/${pro.id}`} className="btn btn-primary">
            <i className="far fa-edit"></i>&nbsp; Sửa
          </Link>
          <button
            className="btn btn-danger ml-5"
            onClick={() => this.props.onDelete(pro.id)}
          >
            <i className="fas fa-trash"></i>&nbsp;Xoá
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
