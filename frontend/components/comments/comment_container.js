import { connect } from 'react-redux';
import CommentComponent from './comment_component';
import { withRouter } from 'react-router-dom';
import { createComment,
  updateComment,
  deleteComment
} from '../../actions/comment_actions';
import { showModal, hideModal } from '../../actions/modal_actions';


const mapStatetoProps = (state, ownProps) => {

  return {
    currentUser: state.session.currentUser || {},
    comment: ownProps.comment,
    users: state.users,
    posts: state.posts,
    post: ownProps.post,
    errors: state.errors,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createComment: (comment) => (dispatch(createComment(comment))),
    updateComment: (comment) => (dispatch(updateComment(comment))),
    deleteComment: () => (dispatch(deleteComment())),
    showModal: (component) => (dispatch(showModal(component))),
    hideModal: () => (dispatch(hideModal())),
  };
};

export default withRouter(connect(
  mapStatetoProps,
  mapDispatchToProps
)(CommentComponent));