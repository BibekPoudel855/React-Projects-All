import { createContext, useReducer } from "react";

const PostList = createContext({
  postList: [],
  addPost: () => {},
  addMassPost: () => {},
  deletePost: () => {},
});
function PostListProvider({ children }) {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  function postListReducer(currentPostList, action) {
    if (action.type === "deletePost") {
      return currentPostList.filter((post) => {
        if (post.id !== action.postId) {
          return post;
        }
      });
    } else if (action.type === "addPost") {
      console.log(action);
      return [action.payload.post, ...currentPostList];
    } else if (action.type === "addMassPost") {
      console.log(action);
      return action.payload.posts;
    }
  }

  function addPost(post) {
    console.log(post);
    
    dispatchPostList({
      type: "addPost",
      payload: {
        post : post,
      },
    });
  }

  function addMassPost(posts) {

    dispatchPostList({
      type: "addMassPost",
      payload: {
        posts: posts,
      },
    });
  }
  function deletePost(postId) {
    console.log(postId);
    dispatchPostList({ type: "deletePost", postId: postId });
  }
  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
        addMassPost: addMassPost,
      }}
    >
      {children}
    </PostList.Provider>
  );
}
export { PostList, PostListProvider };
