import * as types from "./../constants/ActionTypes";
import Message from "./../method/Message";

let delete_product = (state, action) => {
  try {
    let { product_id } = action;
    let index = state.findIndex(x => x.id === product_id);
    state.splice(index, 1);
    Message("Đã xoá thành công<br/>Product ID: " + product_id, "success");
    return state;
  } catch (error) {
    Message("Lỗi khi xoá<br/>Info: " + error, "error");
  }
};
let add_product = (state, action) => {
  try {
    let { product } = action;
    Message("Thêm thành công sản phẩm vào cơ sở dữ liệu", "success");
    state.push(product);
    return state;
  } catch (error) {
    Message("Lỗi khi thêm sản phẩm<br/>Info: " + error, "error");
  }
};
let update_product = (state, action) => {
  try {
    let { product } = action;
    Message("Sửa thành công sản phẩm vào cơ sở dữ liệu", "success");
    let index = state.findIndex(x => x.id === product.id);
    state[index]=product;
    return state;
  } catch (error) {
    Message("Lỗi khi sửa sản phẩm<br/>Info: " + error, "error");
  }
};

var myPreducer = (state = [], action) => {
  switch (action.type) {
    case types.LIST_GETALL:
      state = [...state];
      return [...state];
    case types.SET_PRODUCTS_TO_STATE:
      state = action.products;
      return [...state];
    case types.DELETE_PRODUCT:
      state = delete_product(state, action);
      return [...state];
    case types.ADD_PRODUCT:
      state = add_product(state, action);
      return [...state];
    case types.UPDATE_PRODUCT:
      state = update_product(state, action);
      return [...state];

    default:
      return state;
  }
};

export default myPreducer;
