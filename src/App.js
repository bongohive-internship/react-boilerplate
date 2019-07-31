import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// authentication
import Login from "./components/accounts/Login";
import Register from "./components/accounts/Register";

// users
import Users from "./components/Users/UserList";
import UsersWithHooks from "./components/Users/UserListHooks";

const App = () => {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/users" component={Users} />
        <Route path="/users_hooks" component={UsersWithHooks} />
      </>
    </Router>
  );
};
class Home extends React.Component {
  data = {
    name: "hello"
  };
  render() {
    return (
      <p className="example-div">
        Welcome to BongoHive{" "}
        <Link to="/login" style={{ textDecoration: "none", color: "#79ad6f" }}>
          {" "}
          Login Here
        </Link>
      </p>
    );
  }
}

export default App;
