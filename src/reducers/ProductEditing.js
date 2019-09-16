import * as types from "./../constants/ActionTypes";
// import Message from "./../method/Message";

var myPreducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_PRODUCT_EDITING:
      state = action.productEditing;
      console.log('state :', state);
      return {...state};
    default:
      return state;
  }
};

export default myPreducer;
