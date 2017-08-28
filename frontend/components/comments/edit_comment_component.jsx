import React from 'react';

class EditComment extends React.Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { post: this.props.post };
    this.modalClose = this.modalClose.bind(this);
  }

  handleEdit() {
    this.props.updateComent(this.state).then(() => {
      this.props.hideModal();
    });
  }

  modalClose() {
    this.props.hideModal();
  }
  handleChange(field) {
    return (e) => {
      const edited = Object.assign(
        {}, this.state.post, { [field]: e.currentTarget.value }
      );
      this.setState({ comment: edited });
    };
  }

  render(){
    return(
      <div className='edit-post'>

        <div className='edit-post-label'>
          <label>Edit</label>
          <button onClick={this.modalClose}>X</button>
        </div>
        <form onSubmit={this.handleEdit}>
            <textarea
              value={this.state.post.body}
              onChange={this.handleChange('body')}
            />
          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default EditComment;
