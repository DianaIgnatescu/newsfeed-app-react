import React from 'react';
import styled from 'styled-components';

const AddPost = ({ handleInputChange, handleSubmit }) => {
  return (
    <AddPostWrapper>
      <h2>Add a post</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Insert image URL" name="imageUrl" onChange={handleInputChange}/>
        <input  type="text" placeholder="Add a description" name="description" />
        <button type="submit">Share</button>
      </form>
    </AddPostWrapper>
  )
};

const AddPostWrapper = styled.div`
  padding: 2.5rem;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  h2 {
    color: #2690EB;
    font-weight: 500;
    font-size: 2.4rem;
  }
  
  form {
    display: flex;
    flex-direction: column;
    
    input {
      margin: 0.5rem 0;
      font-size: 1.8rem;
      border: none;
      height: 40px;
      background: #fafafa;
      padding-left: 1rem;
    }
  }
  
  button {
    width: 200px;
    height: 48px;
    background: #2690EB;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 1.8rem;
    font-family: 'Poppins', sans-serif;
    border-radius: 3px;
    align-self: flex-end;
    margin: 0.5rem 0;
    &:hover {
      cursor: pointer;
      background: #1376CB;
    }
  }
`;

export default AddPost;
