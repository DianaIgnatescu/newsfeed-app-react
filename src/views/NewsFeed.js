import React from 'react';
import styled from 'styled-components';
import uuid from 'uuid';

import AddPost from '../components/AddPost';
import PostsList from '../components/PostsList';
import SearchBox from '../components/SearchBox';
import dummyData from '../dummyData';

class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [...dummyData],
      searchField: ''
    }
  }

  handleChange= (e) => {
    this.setState({ searchField: e.target.value })
  };

  handleInputChange = (event) => {
    const {value, name} = event.target;
    this.setState({ [name]: value })
  };

  createPost = (title, imageUrl, description) => {
    if (title && imageUrl && description) {
      return true;
    }
    return false;
  };

  handleSubmit = event => {
    const { posts } = this.state;
    event.preventDefault();
    const imageUrl = event.target.querySelector('input[name="imageUrl"]').value;
    const description = event.target.querySelector('input[name="description"]').value;
    const successfulPost = this.createPost(imageUrl, description);
    if (!successfulPost) {
      event.preventDefault();
    }
    this.setState({
      posts: [
        ...posts,
        {
          id: uuid(),
          imageUrl: imageUrl,
          description: description,
          author: 'Anonymous',
          timestamp: Date.now(),
          likes: 0,
          comments: []
        }
      ]
    });
    event.target.querySelector('input[name="imageUrl"]').value = '';
    event.target.querySelector('input[name="description"]').value = '';
  };

  addNewComment = (id, comment) => {
    const { posts } = this.state;
    const index = id - 1;
    const newPosts = [...posts];
    newPosts[index].comments.push({ text: comment });
    this.setState({ posts: [ ...newPosts ]})
  };

  removePost = (id) => {
    const { posts } = this.state;
    const postsWithoutRemovedPost = posts.filter((post) => post.id !== id);
    this.setState({
      posts: [...postsWithoutRemovedPost],
    });
    console.log(id);
  };

  render() {
    const {
      posts,
      searchField
    } =this.state;
    const filteredPosts = posts.filter(post =>
      post.description.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <NewsFeedWrapper>
        <SearchBox
          handleChange={this.handleChange}
        />
        <AddPost
          createPost={this.createPost}
          onChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
        />
        <PostsList
          posts={filteredPosts}
          addNewComment={this.addNewComment}
          removePost={this.removePost}
          handleChange={this.handleChange}
        />
      </NewsFeedWrapper>
    )
  }
}

const NewsFeedWrapper = styled.div`
  max-width: 800px;
  padding: 30px 0;
  margin: 0 auto;
`;

export default NewsFeed;
