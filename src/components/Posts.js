import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost)
        }
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div className="indiv_post_div" key={post.id}>
                <h4 className="indiv_post_title">{post.title}</h4>
                <p className="indiv_post_body">{post.body}</p>
            </div>
        ))
        return (
            <div>
                <h1 className="section_title">Notes</h1>
                {postItems}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);