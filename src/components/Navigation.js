import React from 'react';
import styled from 'styled-components';

const Navigation = (props) => {
  const { loggedIn, logout } = props;
  if (loggedIn) {
    return (
      <StyledNavigation>
        <nav>
          <button>News</button>
          <button>Articles</button>
          <button>Extras</button>
        </nav>
        <button onClick={logout}>Logout</button>
      </StyledNavigation>
    )
  }
  return (
    <StyledNavigation>
      <nav>
        <button>News</button>
        <button>Articles</button>
        <button>Extras</button>
      </nav>
      <button>Register</button>
    </StyledNavigation>
  );
};

const StyledNavigation = styled.div`
  background: #2690EB;
  height: 48px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 2.5rem;
  align-items: center;
  
  nav {
    display: flex;
    width: auto;
    justify-content: space-between; 
    align-items: baseline;
  }
  
  button {
    text-decoration: none;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 1.8rem;
    padding: 0.5rem 1rem;
    background: none;
    border: none;
    &:hover {
      cursor: pointer;
      color: #daecfc;
    }
  }
`;

export default Navigation;
