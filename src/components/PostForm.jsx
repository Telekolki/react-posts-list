import React from 'react'
import { useRef, useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

function PostForm({addNewPost}) {
    let [post, setPost] = useState({title: '', body: ''});

    function onClick(e, post) {
        addNewPost(e, post); 
        setPost({title: '', body: ''});
    }

    return (
        <form>
            <MyInput 
            value={post.title}
            onChange={e => {setPost({...post, title: e.target.value})}}
            type="text"
            placeholder="Post name">
            </MyInput>

            <MyInput 
            value={post.body}
            onChange={e => {setPost({...post, body: e.target.value})}}
            type="text" 
            placeholder="Post content">
            </MyInput>

            <MyButton type="button" onClick={ e => onClick(e, post) }> Create post </MyButton>
        </form>
    )
}

export default PostForm