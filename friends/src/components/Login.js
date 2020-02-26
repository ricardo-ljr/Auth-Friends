import React from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    // Make a POST request and send the credentials object to the api
    axiosWithAuth()
      .post("/login", this.state.credentials)
      .then(res => {
        window.localStorage.setItem("token", res.data.payload);
        // navigate the user to /protected (whatever landing page)
        this.props.history.push("/friends");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            onChange={this.handleChange}
            valu={this.state.credentials.username}
            type="text"
            name="username"
            placeholder="username..."
          />
          <input
            onChange={this.handleChange}
            value={this.state.credentials.password}
            type="password"
            name="password"
            placeholder="password"
          />
          <br />
          <button className="button-login">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
