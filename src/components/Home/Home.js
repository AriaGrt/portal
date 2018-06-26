import React, {Component} from "react"
import "./Home.css"
import CustomInput from "../../containers/Input/Input"
import axios from "axios"

export default class Home extends Component {

  getToken = () => {
    axios.get('http://localhost:3000/user/connect', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render(){
    return(
      <div className="wrapper">
        <div className="header">
          <span className="title">portal</span>
        </div>
        <div className="form">
          <CustomInput/>
          <div onClick={this.getToken}>Click Me</div>
        </div>
      </div>
    )
  }
}
