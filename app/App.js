import React, {Component} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./Routes";
import Header from "./header/Header";
import {Layout} from "react-toolbox/lib/layout";

class Auth {

  constructor(updateUser) {
    this.updateUser = updateUser;
  }

  handleSignIn = () => this.updateUser({
    signedIn: true
  });

  handleSignOut = () => this.updateUser({
    signedIn: false
  });

}

const updateUserStateIn = component => user => {
  console.log('Update user', user);
  const newState = Object.assign(component.state, {user: user});
  component.setState(newState);
};

class App extends Component {

  auth = new Auth(updateUserStateIn(this));

  state = {
    user: {
      signedIn: false
    }
  };

  render() {
    return (
      <Layout>
        <Router>
          <div>
            <Header auth={this.auth} user={this.state.user}/>
            <div style={{margin: '0 3em'}}>
              <Routes auth={this.auth} user={this.state.user}/>
            </div>
          </div>
        </Router>
      </Layout>
    );
  }
}

export default App;
