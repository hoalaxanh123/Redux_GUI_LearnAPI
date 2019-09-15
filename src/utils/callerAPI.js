import axios from "axios";
import * as Config from "./../constants/Config";
import Message from "./../method/Message";

export default function callAPI(method = "GET", endpoint = "/", body = null) {
  // Send a POST request
  return axios({
    method: method, //GET,POST,PUT,DELETE
    url: `${Config.URL}/${endpoint}`, //url
    data: body //DATA
  }).catch(function(error) {
    Message("ERROR when call API: " + error, "error");
  });
}
