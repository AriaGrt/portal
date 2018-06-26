import React, {Component} from "react"
import "./Home.css"
import LoginForm from "../../containers/LoginForm/LoginForm"
import axios from "axios"

export default class Home extends Component {

  getToken = () => {
    
  }

  render(){
    return(
      <div className="wrapper">
        <div className="header">
          <span className="title">portal</span>
        </div>
        <div className="form">
          <LoginForm/>
        </div>
      </div>
    )
  }
}
