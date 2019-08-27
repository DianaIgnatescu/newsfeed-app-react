import React from 'react';
import styled from 'styled-components';

const Comment = (props) => {
  const { text } = props;
  return (
    <StyledComment>
      <h4>Anonymous</h4>
      <p>{text}</p>
    </StyledComment>
  );
};

const StyledComment = styled.div`
  display: flex;
  align-items: baseline;
  
  h4 {
    font-weight: bold;
    margin-right: 1rem;
    font-size: 1.2rem;
  }
  
  p {
    font-size: 1.4rem;
  }
`;

export default Comment;
