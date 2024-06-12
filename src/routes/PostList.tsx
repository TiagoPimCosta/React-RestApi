import { useEffect, useState } from "react";
import { getPosts } from "../services/postService";
import Post from "../dtos/post";
import { ListElement } from "../components";

function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then((response) => {
      setPosts(response);
    });
  }, []);

  return (
    <div className="flex flex-col space-y-4">
      {posts ? (
        <>
          {posts.map((post) => (
            <ListElement
              id={post.id}
              route={"/post/" + post.id}
              title={post.title}
              body={post.body}
            />
          ))}
        </>
      ) : null}
    </div>
  );
}

export default PostList;
