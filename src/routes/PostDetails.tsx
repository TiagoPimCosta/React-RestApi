import { useParams } from "react-router-dom";
import { getPostDetails } from "../services/postService";
import { useEffect, useState } from "react";
import Post from "../dtos/posts";

function PostDetails() {
  const params = useParams();

  const [post, setPost] = useState<Post>(null);

  useEffect(() => {
    getPostDetails(parseInt(params.id)).then((response) => {
      setPost(response);
    });
  }, []);

  return (
    <>
      {post ? (
        <>
          <p>
            <strong>{post.id}.</strong> {post.title}
          </p>
        </>
      ) : null}
    </>
  );
}

export default PostDetails;
