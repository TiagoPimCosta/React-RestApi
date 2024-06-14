import { useEffect, useState } from "react";
import { getAllComments } from "../services/commentService";
import { ListElement } from "../components";
import Comment from "../dtos/comment";

function CommentList() {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    getAllComments().then((response) => {
      setComments(response);
    });
  }, []);

  return (
    <div className="flex flex-col space-y-4">
      {comments ? (
        <>
          {comments.map((comment) => (
            <ListElement
              key={comment.id}
              id={comment.id}
              route={"/post/" + comment.postId}
              title={comment.name}
              body={comment.body}
              subtitle={"Post: " + comment.postId + "  Email: " + comment.email}
            />
          ))}
        </>
      ) : null}
    </div>
  );
}

export default CommentList;
