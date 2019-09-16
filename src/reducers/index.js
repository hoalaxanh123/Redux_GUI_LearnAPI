import { combineReducers } from "redux";
import Products from "./Products";
import ProductEditing from "./ProductEditing";

const myPreducer = combineReducers({
  Products,
  ProductEditing
});

export default myPreducer;
