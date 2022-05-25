import React, { Component } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import MyButton from './UI/button/MyButton';

const PostItem = (props) => {
    const router = useHistory();
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
            <div 
                className="post_btns"
            >
                <MyButton 
                    className="post__buttons" 
                    type="button"
                    onClick={()=> router.push(`/posts/${props.post.id}`)} 
                >Открой
                </MyButton>
                <MyButton 
                    className="post__buttons" 
                    type="button" 
                    onClick={ () => props.deletePost(props.post) }
                >Удоли
                </MyButton>
            </div>
        </div>
        </div>
    )
}

export default PostItem;

