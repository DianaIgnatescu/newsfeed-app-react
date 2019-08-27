import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import styles from '../src/styles';

import Login from './views/Login';
import Navigation from './components/Navigation';
import NewsFeed from './views/NewsFeed';
import PrivateRoute from './components/PrivateRoute';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
    }
  }

  componentDidMount() {
    const email = localStorage.getItem('email');
    if (email) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  }

  logout = () => {
    localStorage.clear();
    this.setState({ loggedIn: false });
  };

  render () {
    const { loggedIn } = this.state;
    return (
      <StyledApp>
        <Navigation
          loggedIn={loggedIn}
          logout={this.logout}
        />
        <Switch>
          <PrivateRoute exact path="/" component={NewsFeed} />
          <Route path="/login" component={Login} />
        </Switch>
      </StyledApp>
    );
  }
}

const StyledApp = styled.div`
  min-height: 100vh;
  width: 100%;
  background: ${styles.backgroundColor};
`;

export default App;
