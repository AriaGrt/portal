import { UPDATE_USERID_INPUT_VALUE } from "./actionTypes"

export function updateUserIdAction(userId){
  return{
    type: UPDATE_USERID_INPUT_VALUE,
    payload: {
      userId
    }
  }
}
