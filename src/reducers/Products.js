import * as types from "./../constants/ActionTypes";
import callAPI from "./../utils/callerAPI";

var initialState = callAPI("GET", "products", {}).then(res => {
  console.log("API");
  return res.data;
});

var myPreducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_GETALL:
      return state;

    default:
      return state;
  }
};

export default myPreducer;
