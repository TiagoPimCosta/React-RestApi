import { useEffect, useState } from "react";
import { getPosts } from "../services/postService";
import Post from "../dtos/posts";
import { useNavigate } from "react-router-dom";

function PostList() {
  let navigate = useNavigate();

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then((response) => {
      setPosts(response);
    });
  }, []);

  function nextPath(path: string) {
    navigate(path);
  }
  function navigatePost(id: number) {
    nextPath("/" + id);
  }

  return (
    <>
      {posts.map((post) => (
        <div id={post.id.toString()}>
          <p>
            <strong>{post.id}.</strong>{" "}
            <a onClick={() => navigatePost(post.id)}>{post.title}</a>
          </p>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
}

export default PostList;
