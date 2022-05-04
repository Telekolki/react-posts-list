import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo( ()=> {
        if (sort) {
          return[...posts].sort( (a, b) => a[sort].localeCompare(b[sort]));
        }
        return posts;
      }, [sort, posts] );

      return sortedPosts;
}

export const usePosts = (posts, query, sort)=> {
    const sortedPosts = useSortedPosts(posts, sort);
    let sortedAndSearchedPosts = useMemo( () => {
        if (query) {
          return sortedPosts.filter( (el) => el.title.toLowerCase().includes(query.toLowerCase()) );
        } else return sortedPosts;
          
      }, [query, sortedPosts] );

      return sortedAndSearchedPosts;
}

export default usePosts;