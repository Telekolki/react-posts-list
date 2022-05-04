import React, { Component } from 'react'

const PostItem = (props) => {
    // console.log(props.post);
    return (
        <div>
            <div className="post">
            <div className="post__content">
                <strong>{props.post.id} </strong>
                <strong>{props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <button className="post__buttons" type="button" onClick={ () => props.deletePost(props.post) }>Удоли</button>
        </div>
        </div>
    )
}

export default PostItem;

