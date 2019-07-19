import { FETCH_POSTS, NEW_POSTS} from './types';

export const fetchPosts = () => dispatch => {
    console.log('fetching posts')
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(entries => entries.json())
    .then(posts => dispatch({
        type: FETCH_POSTS,
        payload: posts
    }))
};

export const createPost = (postData) => dispatch => {
    console.log('post new post', postData)
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            header: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(post => {
            if (post.title === undefined) {
                post.title = postData.title
                post.body = postData.body
            }
            dispatch({
                type: NEW_POSTS,
                payload: post
            })
        })
}