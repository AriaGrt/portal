import { UPDATE_USERID_INPUT_VALUE } from "../actions/actionTypes"
import {combineReducers} from "redux"

const initialState = {
  userId : ""
}

function userReducer(state = initialState, action){
  switch (action.type) {
    case UPDATE_USERID_INPUT_VALUE:
      return {
        ...state,
        userId: action.payload.userId
      }
    default:
      return state
  }
}

const portalApp = combineReducers({
  user: userReducer
})

export default portalApp
