import { useParams } from "react-router-dom";
import { getPostComments, getPostDetails } from "../services/postService";
import { FormEvent, useEffect, useState } from "react";
import Post from "../dtos/post";
import Comment from "../dtos/comment";
import { ListElement } from "../components";
import {
  addCommentRequest,
  deleteCommentRequest,
  editCommentRequest,
} from "../services/commentService";

import { DefaultPagination } from "../components/DefaultPagination";

function PostDetails() {
  const params = useParams();

  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    getPostDetails(Number(params.id)).then((response) => {
      setPost(response);
    });
    getPostComments(Number(params.id)).then((response) => {
      setComments(response);
    });
  }, []);

  const submitNewComment = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 100) + 500;
    const postId = Math.floor(Math.random() * 100) + 1;
    // Add Comment In Api
    addComment({ id, postId, name, email, body: comment });
    clearForm();
  };

  const addComment = (newComment: Comment) => {
    addCommentRequest(newComment);
    setComments([...comments, newComment]);
  };

  const editComment = (comment: Comment) => {
    editCommentRequest(comment);
  };

  const deleteComment = (id: number) => {
    deleteCommentRequest(id);
    setComments(comments.filter((comment) => comment.id != id));
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setComment("");
  };

  const commentsPaginated = comments.slice(
    currentPage * 2,
    currentPage * 2 + 2
  );

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
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Comment
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="body"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Enter your comment"
              ></textarea>
            </div>
            <button
              className="bg-gray-100 hover:bg-gray-300 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={submitNewComment}
            >
              Comment
            </button>
          </form>
          {comments ? (
            <>
              {commentsPaginated.map((comment) => (
                <ListElement
                  key={comment.id}
                  id={comment.id}
                  title={comment.name}
                  subtitle={comment.email}
                  body={comment.body}
                  isEditable={true}
                  onEdit={editComment}
                  onDelete={deleteComment}
                />
              ))}
              <DefaultPagination
                page={currentPage}
                changePage={setCurrentPage}
                totalItems={comments.length}
                itemsPerPage={2}
              />
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default PostDetails;
