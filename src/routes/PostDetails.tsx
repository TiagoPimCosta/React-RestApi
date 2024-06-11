import { useNavigate, useParams } from "react-router-dom";
import { getPostDetails } from "../services/postService";
import { useEffect, useState } from "react";
import Post from "../dtos/posts";

function PostDetails() {
  var params = useParams();
  let navigate = useNavigate();

  const [post, setPost] = useState<Post>(null);

  useEffect(() => {
    getPostDetails(parseInt(params.id)).then((response) => {
      setPost(response);
    });
  }, []);

  function nextPath(path: string) {
    navigate(path);
  }
  function navigateHome() {
    nextPath("/");
  }

  return (
    <>
      {post ? (
        <>
          <button onClick={navigateHome}>Home</button>
          <p>
            <strong>{post.id}.</strong> {post.title}
          </p>
        </>
      ) : null}
    </>
  );
}

export default PostDetails;
