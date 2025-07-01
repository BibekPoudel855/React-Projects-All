import { useRef } from "react";
import css from "./../css/CreatePost.module.css";
import { useContext } from "react";
import { PostList } from "./../store/PostsListStore";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const navigate = useNavigate();

  const { addPost } = useContext(PostList);
  const userIdRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const likesRef = useRef();
  const tagsRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    const userId = userIdRef.current.value;
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const likes = likesRef.current.value;
    const tags = tagsRef.current.value;
    let tagsArr = [];
    tagsArr = tags.split(" ");

    userIdRef.current.value = "";
    titleRef.current.value = "";
    descriptionRef.current.value = "";
    likesRef.current.value = "";
    tagsRef.current.value = "";
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: userId,
        userId: userId,
        title: title,
        body: description,
        reactions: {
          likes: likes,
          dislikes: likes,
          shares: likes,
        },
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        addPost(data);
      });
      navigate("/")
  }

  return (
    <form className={`${css.createPost}`} onSubmit={handleSubmit}>
      <div className={`mb-3`}>
        <label htmlFor="userId" className="form-label">
          User Id
        </label>
        <input
          type="number"
          placeholder="Enter User Id"
          className="form-control"
          id="userId"
          ref={userIdRef}
        />
      </div>
      <div className={`mb-3`}>
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          placeholder="Enter Post Title"
          className="form-control"
          id="title"
          aria-describedby="emailHelp"
          ref={titleRef}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          ref={descriptionRef}
          placeholder="Enter Post Description"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="likes" className="form-label">
          No of Likes
        </label>
        <input
          type="number"
          className="form-control"
          id="likes"
          placeholder="Enter No of Likes"
          ref={likesRef}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="likes" className="form-label">
          Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          placeholder="Enter Tags"
          ref={tagsRef}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}

export default CreatePost;
