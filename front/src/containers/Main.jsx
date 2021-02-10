import React from "react";
import axios from "axios";
import Users from "../components/Users";
import SingleUser from "../components/SingleUser";

// antes de ocupar axios, ocupaba el arreglo fakeAlbums.

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      user: {}
    };

    this.deselectUser = this.deselectUser.bind(this)
    this.singleUserMethod = this.singleUserMethod.bind(this)
  }
/* /api/users */
  componentDidMount() {
    axios.get("/api/users")
    .then((res) => res.data)
    .then((serverUsers) => this.setState({users: serverUsers}) )
  }
/* /api/users/1 */

  singleUserMethod(userId) {
    axios.get(`/api/users/${userId}`)
    .then((res) => res.data)
    .then((serverUser) => this.setState({user: serverUser}))
  }

  deselectUser() {
    this.setState({
      user: {}
    })
  }

  render() {
    return (
      <div>
        {
          this.state.user.id ? 
          <SingleUser singleUser = {this.state.user} deselectUser = {this.deselectUser}/> :
          <Users todosLosUsers = {this.state.users} singleUserMethod = {this.singleUserMethod} />
        }
      </div>
    );
  }
}

export default Main;

/* class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      users: [],
      singleUser: {}
    }

    this.singleUserMethod = this.singleUserMethod.bind(this)
    this.deselectUser = this.deselectUser.bind(this)
  }

  componentDidMount() {
    axios.get("/api/users")
    .then((res) => res.data)
    .then((serverUsers) => this.setState({users: serverUsers}))
  }

  singleUserMethod(userId) {
    axios
    .get(`/api/users/${userId}`)
    .then((res) => res.data)
    .then((singleUserServer) => this.setState({singleUser: singleUserServer}))
  }

  deselectUser() {
    this.setState({singleUser: {}})
  }

  render() {
    return (
        <div>
          {
            this.state.singleUser.id ? 
            <SingleUser singleUser = {this.state.singleUser} deselectUser = {this.deselectUser}/> 
            : 
            <Users users = {this.state.users} singleUserMethod = {this.singleUserMethod} />
          }

        </div>
    );
  }
}

export default Main; */
