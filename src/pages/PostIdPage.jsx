import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

function PostIdPage() {
    let [post, setPost] = useState({});
    let [comments, setComments] = useState([]);
    const params = useParams();

    let [fetching, isLoading, error] = useFetching( async () => {
        const fetchingResponse = await PostService.getPostById(params.id);
        setPost(fetchingResponse.data);
      });

    let [fetchingComment, isLoadingComment, errorComment] = useFetching( async () => {
        const fetchingResponse = await PostService.getPostComments(params.id);
        setComments(fetchingResponse.data);
    });

    useEffect( ()=> {
        fetching();
        fetchingComment();
    }, [] );
    return (
        <div className="App">
            <div className="post">
                {error && <h1> {error} </h1> }
                {isLoading 
                    ? <Loader/> 
                    : <div>
                        <h1>{post.id}</h1>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>} 
            </div>
            <div className="comment">
                <h1 style={{paddingBottom: '20px', paddingTop: '20px'}} >Comments</h1>
                {errorComment && <h1> {errorComment} </h1> }
                {isLoadingComment 
                    ? <Loader/> 
                    : <div>
                        {comments && comments.map( (comment, i) => {
                            return <div>
                                <div>{comment.email}</div>
                                <div>{comment.name}</div>
                                <div style={{paddingBottom: '15px'}} >{comment.body}</div>
                            </div>
                        } )}
                    </div>} 
            </div>
            
        </div>
      );
}

export default PostIdPage;