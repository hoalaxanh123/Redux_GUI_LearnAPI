import * as types from "./../constants/ActionTypes";
import callAPI from "./../utils/callerAPI";
import Message from "./../method/Message";

export const get_all_products = () => {
  return dispatch => {
    return callAPI("GET", "products", {}).then(res => {
      if (res)
        if (res.status === 200) dispatch(set_products_to_state(res.data));
    });
  };
};
export const set_products_to_state = products => {
  return {
    type: types.SET_PRODUCTS_TO_STATE,
    products
  };
};
export const delete_product = product_id => {
  return {
    type: types.DELETE_PRODUCT,
    product_id
  };
};
export const delete_productReQuest = product_id => {
  return dispatch => {
    return callAPI("DELETE", `products/${product_id}`, {}).then(res => {
      if (res) {
        if (res.status === 200) {
          dispatch(delete_product(product_id));
        }
      }
    });
  };
};
export const add_product = product => {
  return {
    type: types.ADD_PRODUCT,
    product
  };
};
export const add_productReQuest = product => {
  return dispatch => {
    return callAPI("POST", `products`, product).then(res => {
      if (res) {
        if (res.status === 201) {
          dispatch(add_product(product));
        } else {
          Message(
            `Đã sảy ra lỗi<br/>Error code: ${res.status}<br/>Error info: ${res.statusText}`,
            "error"
          );
        }
      }
    });
  };
};
export const update_product = product => {
  return {
    type: types.UPDATE_PRODUCT,
    product
  };
};
export const get_product_by_id_Request = id => {
  return dispatch => {
    return callAPI("GET", `products/${id}`, {}).then(res => {
      if (res) {
        if (res.status === 200) {
          dispatch(get_product(res.data));
        } else {
          Message(
            `Đã sảy ra lỗi khi thấy thông tin sản phẩm<br/>Error code: ${res.status}<br/>Error info: ${res.statusText}`,
            "error"
          );
          return {};
        }
      }
    });
  };
};
export const get_product = productEditing => {
  return {
    type: types.GET_PRODUCT_EDITING,
    productEditing
  };
};
export const update_productReQuest = product => {
  return dispatch => {
    return callAPI("PUT", `products/${product.id}`, product).then(res => {
      if (res) {
        if (res.status === 200) {
          dispatch(update_product(product));
        } else {
          Message(
            `Đã sảy ra lỗi<br/>Error code: ${res.status}<br/>Error info: ${res.statusText}`,
            "error"
          );
        }
      }
    });
  };
};

