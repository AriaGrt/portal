import React, {Component} from "react"
import { Input } from "semantic-ui-react"
import './LoginForm.css'
import {updateUserIdAction, checkUserIdAction} from "../../actions/authenticationActions"
import {connect} from "react-redux"

class LoginForm extends Component {

  checkKeyPress = (key, checkUserId) => {
    if(key === 'Enter') checkUserId(this.props.userId)
  }

  render(){
    let {updateEmailInput, checkUserId} = this.props

    return(
      <Input className="input" placeholder='Server ID' onChange={ event => updateEmailInput(event.target.value)} onKeyPress={ event => this.checkKeyPress(event.key, checkUserId)}/>
    )
  }
}

const mapStateToProps = (state) => ({
  userId: state.user.userId
})

const mapDispatchToProps = dispatch => ({
  updateEmailInput: userId =>   dispatch(updateUserIdAction(userId)),
  checkUserId: userId => dispatch(checkUserIdAction(userId))
})


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
