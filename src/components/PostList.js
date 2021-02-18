import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPostAndUsers } from '../actions';
import UserHeader from './UserHeader';

export class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostAndUsers()
  }
  renderList() {
    return this.props.posts.map( post => (
      <div className="item" key={post.id}>
        <i className="large middle aligned icon user"></i>
        <div className="ui content">
          <div className="description"></div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
        <UserHeader userId={post.userId} />
      </div>
    ))
  }
  render() {
    return (
      <div className="ui container">
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}
export default connect(
  mapStateToProps,
  { fetchPostAndUsers }
)(PostList);
