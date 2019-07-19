import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class Postsform extends Component {
    state = {
        title: "",
        body: ""
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault()
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        this.props.createPost(post);
        this.setState({title: "", body: ""})
    }

    render() {
        return (
            <div>
                {/* <h1 className="section_title">Add New Post</h1> */}
                <form className="new_post_form" onSubmit={this.onSubmit}>
                    <div>
                        <label className="input_label">Title</label>
                        <input className="input_field" name="title" type="text" onChange={this.onChange} value={this.state.title}/>
                    </div>
                    <div>
                        <label className="input_label">Body</label>
                        <textarea className="input_textarea" name="body" type="text" onChange={this.onChange} value={this.state.body}/>
                    </div>
                    <div>
                        <button className="submit_button" type="submit">Add Note</button>
                    </div>
                </form>
            </div>
        )
    }
}

Postsform.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(Postsform);