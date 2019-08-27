import React from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import FormInput from '../components/FormInput';
import NewsFeed from './NewsFeed';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  login = (email, password) => {
    if (email === 'user@email.com' && password === 'password') {
      localStorage.setItem('email', email);
      return true;
    }
    return false;
  };

  handleSubmit = event => {
    event.preventDefault();
    const email = event.target.querySelector('input[name="email"]').value;
    const password = event.target.querySelector('input[name="password"]').value;
    const successfulLogin = this.login(email, password);
    if (!successfulLogin) {
      event.preventDefault();
    }
    this.setState({ email: 'user@email.com', password: 'password', loggedIn: true});
  };

  handleChange = event => {
    const {value, name} = event.target;
    this.setState({ [name]: value })
  };

  render() {
    const { loggedIn } = this.state;
    if (loggedIn) {
      return <Redirect to={NewsFeed} />
    }
    return (
      <LoginWrapper>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />

          <LoginButton type="submit">LOG IN</LoginButton>
        </form>
      </LoginWrapper>
    )
  }
}

const LoginWrapper = styled.div`
  height: auto;
  width: 500px;
  padding: 2.5rem;
  margin: 30px auto;

  h2 {
    color: #2690EB;
    font-weight: 500;
    font-size: 3rem;
  }
`;

const LoginButton = styled.button`
  background: #2690EB;
  width: 100%;
  height: 48px;
  color: #FFFFFF;
  font-weight: bold;
  font-size: 1.8rem;
  font-family: 'Poppins', sans-serif;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
    background: #1376CB;
  }
`;

export default Login;

