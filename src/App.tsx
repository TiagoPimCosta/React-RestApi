import { useEffect, useState } from "react";
import "./App.css";
import { getPosts } from "./services/postService";
import Post from "./dtos/posts";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then((response) => {
      setPosts(response);
    });
  }, []);

  return (
    <>
      {posts.map((post) => (
        <div id={post.id.toString()}>
          <p>
            <strong>{post.id}.</strong> {post.title}
          </p>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
}

export default App;
