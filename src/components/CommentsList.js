import React from 'react';
import Comment from '../components/Comment';

const CommentsList = (props) => {
  const { comments } = props;
  return (
    <div>
      {comments.map(comment => (
        <Comment
          key={`${Math.random()}-${comment.text}`}
          text={comment.text}
        />
      ))}
    </div>
  );
};

export default CommentsList;
