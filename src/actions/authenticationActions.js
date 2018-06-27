import { UPDATE_USERID_INPUT_VALUE, CHECK_USERID_INPUT_VALUE } from "./actionTypes"
import axios from "axios"

export function updateUserIdAction(userId){
  return{
    type: UPDATE_USERID_INPUT_VALUE,
    payload: {
      userId
    }
  }
}

export function checkUserIdAction(userId){
  return function (dispatch) {
    return axios.get('http://www.colr.org/json/color/random')
      .then( response => {
        console.log(response);
      })
      .catch( error => {
        console.log(error);
      });
  }
}
