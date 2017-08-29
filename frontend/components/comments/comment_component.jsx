import React from 'react';
import { Link } from 'react-router-dom';
import EditCommentComponent from './edit_comment_component';

class CommentsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleModal = this.handleModal.bind(this);
  }

  handleModal () {
    this.props.showModal(
      <EditCommentComponent
        comment={this.props.comment}
        hideModal={this.props.hideModal}
        updateComment={this.props.updateComment}
        deleteComment={this.props.deleteComment}
        fetchPost={this.props.fetchPost}
        fetchAllComments={this.props.fetchAllComments}
        />
    );
  }

  render() {
    if (!this.props.comment) {
      return null;
    }

    let editComment;

    if (this.props.currentUser.id === this.props.comment.author_id) {
      editComment = (
        <button onClick={this.handleModal}>…</button>
      )
    } else {
      editComment = null;
    }

    const author = this.props.users[this.props.comment.author_id];
    return (
      <div className="comment">
        <div className="comment-author">
          <div className="comment-author-pic-and-name">
            <img src={author.profilePicUrl}></img>
            <Link to={`/users/${author.id}`}>{author.name}</Link>
          </div>
          {editComment}
        </div>
        <p className="comment-body">
          {this.props.comment.body}
        </p>
      </div>
    );
  }
}

export default CommentsComponent;
