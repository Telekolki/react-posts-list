import React from 'react'
import PostItem from "./PostItem";
import {CSSTransition,TransitionGroup} from 'react-transition-group';

const PostsList = ({list, title, deletePost}) => {

  if (list.length == 0) {
    return <h1 style={{textAlign: 'center'}}>No content</h1>
  }

  return (
    <div>
        <h1 style={{textAlign: 'center'}} > {title} </h1>
        <TransitionGroup>
          {list.map( (post, i) =>
            <CSSTransition 
              key={post.id}
              timeout={500}
              classNames="post"
              >
                <PostItem post={post}  index={i} deletePost={deletePost}/>
            </CSSTransition> 
          )}
        </TransitionGroup>
    </div>
  )
}

export default PostsList