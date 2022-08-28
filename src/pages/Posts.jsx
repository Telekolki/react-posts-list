import { useEffect, useRef, useState } from "react";
import PostForm from "../components/PostForm";
import PostsList from "../components/PostsList";
import PostFilter from "../components/PostFilter";
import "../styles/App.css"
import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import usePosts from "../hooks/usePosts";
import { useFetching } from "../hooks/useFetching";
import { usePagination } from "../hooks/usePagination";
import PostService from "../API/PostService";
import Pagination from "../components/UI/pagination/Pagination";
import { getPageCount } from "../utils/pages";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";

function Posts() {

  let [filter, setFilter] = useState({sort: '', query: ''});
  let [modal, setModal] = useState(false);
  let [posts, setPosts] = useState([]);
  let [totalPagesCounter, setTotalPagesCounter] = useState(0);
  let [limit, setLimit] = useState(10);
  let [page, setPage] = useState(1);
  let [fetching, isLoading, error] = useFetching( async () => {
    const fetchingResponse = await PostService.getAllPosts(limit, page);
    setPosts([...posts, ...fetchingResponse.data]);
    setTotalPagesCounter(getPageCount(fetchingResponse.headers['x-total-count'], limit));
  });

  let pagesArray = usePagination(totalPagesCounter);
  let lastElement = useRef();

  useObserver(lastElement, isLoading, page < totalPagesCounter, ()=> setPage(page + 1));

  useEffect( () => {
    fetching();
  }, [page, limit]);

  let title = 'This is some your content';

  let sortedAndSearchedPosts = usePosts(posts, filter.query, filter.sort);

  let addNewPost = (e, post) => {
    e.preventDefault();
    setPosts([...posts, {id: Date.now(), ...post}]);
    setModal(false);
  }

  let deletePost = (post) => {
    let newArray = posts.filter( el => el.id !== post.id );
    setPosts(newArray);
  }

  return (
    <div className="App">
      <MyButton type="button" style={{marginTop: 20}} onClick={() => setModal(true)}> Add new post </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm addNewPost={addNewPost}></PostForm>
      </MyModal>
      <hr style={{margin: '15px 0'}}></hr>
      <PostFilter filter={filter} setFilter={setFilter}></PostFilter>
      <MySelect
        value={limit}
        onChange={value => setLimit(value)}
        defaultValue="Show on page"
        options={[
          {value: 5, name: '5'},
          {value: 10, name: '10'},
          {value: 25, name: '25'},
          {value: -1, name: 'all'}
        ]}
      />
      { error && <h1> {error} </h1> }
      <PostsList list={sortedAndSearchedPosts} title={title} deletePost={deletePost}/>
      <div ref={lastElement} style={{height:20, background: 'red'}}></div>
      <Pagination page={page} setPage={setPage} pagesArray={pagesArray}> </Pagination>
    </div>
  );
}

export default Posts;
