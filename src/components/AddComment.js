import React from 'react';
import styled from 'styled-components';

const handleSubmit = (event, id, addNewComment) => {
  const { value } = event.target.querySelector('input');
  event.preventDefault();
  if (!value) {
    return;
  }
  addNewComment(id, value);
  event.target.querySelector('input').value = '';
};

const AddComment = ({ id, addNewComment }) => {
  return (
    <StyledAddComment>
      <h4>Leave a Reply</h4>
      <form onSubmit={event => handleSubmit(event, id, addNewComment)}>
        <input
          placeholder="Add a Comment..."
          name="comment"
        />
        <button type="submit">SUBMIT</button>
      </form>
    </StyledAddComment>
  );
};

const StyledAddComment = styled.div`
  padding: 1rem 0;
  
  h4 {
    font-size: 1.8rem;
    font-weight: bold;
  }
  
  form {
    display: flex;
    justify-content: space-between;
    
    input {
      width: 100%;
      border: none;
      border-bottom: 1px solid lightgray;
      font-size: 1.6rem;
      margin-bottom: 1rem;
      height: 40px;
      background: none;
    }
    
    button {
      margin-left: 2rem;
      height: 40px;
      background: #2690EB;
      border: none;
      color: white;
      border-radius: 3px;
      font-size: 1.4rem;
      width: 100px;
      font-weight: bold;
      &:hover {
        cursor: pointer;
        background: #1376CB;
      }
    }
  }
`;

export default AddComment;
