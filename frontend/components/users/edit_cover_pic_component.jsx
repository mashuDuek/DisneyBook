import React from 'react';

class EditCoverPicComponent extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      imageUrl: null, imageFile: null, displayInput: false
    };
    this.handleUpdateCover = this.handleUpdateCover.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleUpdateCover (e) {
    this.setState({ displayInput: !this.state.displayInput });
  }

  handleSubmit() {
    const file = this.state.imageFile;
    const formData = new FormData();

    if (file) formData.append("user[image]", file);
    this.props.updateCover(formData);
    // ApiUtil.createPost(formData, this.resetForm);
    // here instead of Api create post, need to dispatch to edit user cover
  }

  handleInput(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
    this.setState({ imageUrl: reader.result, imageFile: file});

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }

  render() {

    // need to make sure at some point I invoke handleInput

    let input;
    if (!this.state.displayInput) {
      input = null;
    } else {
      input = (
        <form onSubmit={this.handleSubmit}>
          <input type='file' onChange={this.handleInput}></input>
          <button>Change Your Pic</button>
        </form>
      );
    }
    return (
      <div className="edit-cover-pic-wrapper">
        <img src={this.props.user.coverPic}></img>
        <div className='edit-cover-pic'>
          <button onClick={this.handleUpdateCover}>Edit Cover Pic</button>
          {input}
        </div>
      </div>
    );
  }
}

export default EditCoverPicComponent;
