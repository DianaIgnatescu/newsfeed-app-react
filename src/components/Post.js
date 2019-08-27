import React from 'react';
import styled from 'styled-components';
import styles from '../styles';

import CommentsList from './CommentsList';
import AddComment from './AddComment';

const Post = (props) => {
  const {
    imageUrl, description, author, timestamp, likes, comments, addNewComment, id, removePost, handleChange
  } = props;
  return (
    <PostWrapper>
      <PostHeader>
        <div className="author-details">
          <p>{author}</p>
          <span>{timestamp}</span>
        </div>
        <i
          className="fas fa-trash-alt"
          onClick={() => removePost(id)}
          onChange={handleChange}
        />
      </PostHeader>

      <p className="description">{description}</p>
      <div className="image-container">
        <img src={imageUrl} alt={description}/>
      </div>

      <div className="actions">
        <i className="far fa-heart"> {likes}</i>
        <i className="far fa-comment"> {comments.length}</i>
        <i className="fas fa-external-link-alt" />
        <i className="far fa-flag" />
      </div>

      <div className="comments-section">
        <AddComment
          comments={comments}
          addNewComment={addNewComment}
          id={id}
        />
        <CommentsList
          comments={comments}
        />
      </div>
    </PostWrapper>
  )
};

const PostWrapper = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  padding: 2.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  
  &:hover {
    background: ${styles.hoverGrey};
    cursor: pointer;
  }

  h3 {
    font-weight: 700;
    font-size: 2.2rem;
    padding: 1rem 0;
    color: #363a3e;
  }
  
  .description {
    font-size: 1.6rem;
    line-height: 1.25;
    padding: 0.5rem 0 1.5rem 0;
  }

  .image-container {
    width: 100%;

    img {
      width: 100%;
    }
  }
  
  .actions {
    display: flex;
    justify-content: space-between;
    
    i {
      font-size: 2rem;
      padding: 1.5rem 2.5rem 0 2.5rem;
      color: darkgray;
      &:hover {
        color: #92C7F5;
        transition: 0.3s ease;
        cursor: pointer;
      }
    }
  }
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 1rem;
  p {
    font-weight: bold;
    font-size: 1.8rem;
    padding-right: 1rem;
  }
  span {
    color: darkgray;
    font-size: 1.4rem;
    text-align: right;
    position: relative;
    right: 0;
  }
  i {
    font-size: 2rem;
    &:hover {
      color: #92C7F5;
      transition: 0.3s ease;
      cursor: pointer;
    }
  }
  .author-details {
    display: flex;
    align-items: baseline;
  }
`;

export default Post;
