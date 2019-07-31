import React from "react";
import { Item } from "./Item";
import axios from "axios";
// import users from '../Utils';

class UserList extends React.Component {
  state = {
    users: [],
    name: "",
    error: ""
  };
  async componentDidMount() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      this.setState({
        users: await response.data
      });
    } catch (error) {
      this.setState({
        error: error.message
      });
    }
  }

  render() {
    const { users, error } = this.state;
    return (
      <>
        {error.length ? (
          <h3>{error}</h3>
        ) : (
          <ul>
            {users.map(user => (
              <Item key={user.id} name={user.name} />
            ))}
          </ul>
        )}
      </>
    );
  }
}
export { UserList as default };
