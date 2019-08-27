import React from 'react';
import styled from 'styled-components';

import Post from '../components/Post';

const PostsList = (props) => {
  const {
    posts, addNewComment, removePost, handleChange
  } = props;
  return (
    <PostsListWrapper>
      {posts.map(post => (
        <Post
          id={post.id}
          key={post.id}
          imageUrl={post.imageUrl}
          title={post.title}
          author={post.author}
          description={post.description}
          timestamp={post.timestamp}
          likes={post.likes}
          comments={post.comments}
          addNewComment={addNewComment}
          removePost = {removePost}
          handleChange={handleChange}
        />
      ))}
    </PostsListWrapper>
  );
};

const PostsListWrapper = styled.div`
  margin-top: 2.5rem;
  background: #FFFFFF;
`;

export default PostsList;
