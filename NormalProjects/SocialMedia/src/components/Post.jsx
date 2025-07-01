import { useContext } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { PostList } from "../store/PostsListStore";

function Post({postData}) {
  const {deletePost} = useContext(PostList);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <p>{postData.userId}</p>
        <h5 className="card-title">{postData.title}</h5>
        <p className="card-text">
          {postData.body}
        </p>
        <p>{postData.reactions.likes} Likes</p>
        <p>{postData.reactions.dislikes} Dislikes</p>
        <p>{postData.reactions.likes} Shares</p>
        <RiDeleteBinFill onClick={() => deletePost(postData.id)} />
      </div>
    </div>
  );
}
export default Post;
