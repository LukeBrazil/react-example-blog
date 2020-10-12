import React from 'react';
import { useParams } from 'react-router-dom';

const Post = props => {
    const { id } = useParams();
    const post = props.post[id];

    return (
        <article>
            <h1>{post.title}</h1>
            <h1>{post.content}</h1>
        </article>
    )
}

export default Post;
