import * as types from "./../constants/ActionTypes";
var initialState = [
  {
    id: 1,
    name: "Samsung note 1",
    des: "Con cưng của samsung 1",
    price: 50,
    status: 2
  },
  {
    id: 2,
    name: "Samsung note 2",
    des: "Con cưng của samsung 2",
    price: 100,
    status: 0
  },
  {
    id: 3,
    name: "Samsung note 3",
    des: "Con cưng của samsung 3",
    price: 150,
    status: 1
  },
  {
    id: 4,
    name: "Samsung note 4",
    des: "Con cưng của samsung 4",
    price: 200,
    status: 0
  },
  {
    id: 5,
    name: "Samsung note 5",
    des: "Con cưng của samsung 5",
    price: 250,
    status: 1
  }
];
var myPreducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_GETALL:
      return state;

    default:
      return state;
  }
};

export default myPreducer;
