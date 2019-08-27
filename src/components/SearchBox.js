import React from 'react';
import styled from 'styled-components';

const SearchBox = ({ handleChange }) => {
  return (
    <StyledSearchBox>
      <input
        placeholder="Search..."
        onChange={handleChange}
      />
      <i className="fas fa-search" />
    </StyledSearchBox>
  )
};

const StyledSearchBox = styled.div`
  display: flex;
  align-items: center;
  border-radius: 3px 3px 0 0;
  background: #2690EB;
  justify-content: flex-end;
  padding: 1rem 1.5rem;
  
  input {
    min-width: 100px;
    background: #5cacf0;
    color: #FFFFFF;
    height: 40px;
    border: none;
    border-radius: 3px;
    padding-left: 1rem;
    font-size: 1.6rem;
    &::placeholder {
      color: #FFFFFF;
    }
  }
  
  i {
    color: #FFFFFF;
    font-size: 1.8rem;
    padding: 0 1rem;
  }
`;

export default SearchBox;
