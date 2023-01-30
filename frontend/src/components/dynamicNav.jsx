import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isAuthenticated: false,
        user: null
      };
    }
 
    render() {
      const { isAuthenticated, user } = this.state;
      return (
        <div>
          {isAuthenticated ? (
            <React.Fragment>
              <img src={user.photo} alt="Profile" />
              <p>{user.username}</p>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </React.Fragment>
          )}
        </div>
      );
    }
  }
    export default Navbar;
  