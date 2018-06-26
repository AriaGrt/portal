import React, {Component} from "react"
import { Input } from "semantic-ui-react"
import './Input.css'
import {updateUserIdAction} from "../../actions/index"
import {connect} from "react-redux"

const CustomInput = ({userId, updateInput}) => {
  console.log(userId)
  return(
    <Input className="input" placeholder='Server ID' onChange={ event => updateInput(event.target.value)}/>
  )
}

const mapStateToProps = (state) => ({
  userId: state.user.userId
})

const mapDispatchToProps = dispatch => ({
  updateInput: userId => dispatch(updateUserIdAction(userId))
})


export default connect(mapStateToProps, mapDispatchToProps)(CustomInput)
