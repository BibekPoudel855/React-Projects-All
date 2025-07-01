import { useContext, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/PostsListStore";
import css from "./../css/PostList.module.css";
import ErrorMsg from "./ErrorMsg";
import Loader from "./Loader"

function PostList() {
  const [loading, setLoading] = useState(false);
  const postData = useContext(PostListData);
  const fetchData = () => {
    setLoading(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        postData.addMassPost(data.posts);
        setLoading(false);
    });
  };
  return (
    <div className={css.postsContainer}>
      {loading ? (
        <Loader />

        
      ) : postData.postList.length === 0 ? (
        <ErrorMsg fetchData={() => fetchData()} />
      ) : (
        postData.postList.map((post) => {
          return <Post key={post.id} postData={post} />;
        })
      )}
    </div>
  );
}
export default PostList;