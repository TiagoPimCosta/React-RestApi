import { useParams } from "react-router-dom";
import { getPostComments, getPostDetails } from "../services/postService";
import { useEffect, useState } from "react";
import Post from "../dtos/post";
import Comment from "../dtos/comment";
import { ListElement } from "../components";

function PostDetails() {
  const params = useParams();

  const [post, setPost] = useState<Post>(null);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    getPostDetails(parseInt(params.id)).then((response) => {
      setPost(response);
    });
    getPostComments(parseInt(params.id)).then((response) => {
      setComments(response);
    });
  }, []);

  return (
    <>
      <div>
        {post ? (
          <div className="pb-6">
            <p>
              <strong>{post.id}.</strong> {post.title}
            </p>
            <p>{post.body}</p>
          </div>
        ) : null}
        <h2 className="text-lg font-bold mb-4">Comments</h2>
        <div className="flex flex-col space-y-4">
          <form className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Add a comment</h3>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Comment
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="comment"
                placeholder="Enter your comment"
              ></textarea>
            </div>
            <button
              className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </form>
          {comments ? (
            <>
              {comments.map((comment) => (
                <ListElement
                  id={comment.id}
                  title={comment.name}
                  subtitle={comment.email}
                  body={comment.body}
                />
              ))}
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default PostDetails;
