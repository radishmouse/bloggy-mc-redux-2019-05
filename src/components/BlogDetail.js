import React from 'react';

export default function BlogDetail({post}) {
    return (
        post ? (
            <div>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
            </div>
        ) : null
    );
}