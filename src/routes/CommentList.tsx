import { useEffect, useState } from "react";
import { getAllComments } from "../services/commentService";
import { ListElement } from "../components";
import Comment from "../dtos/comment";
import { DefaultPagination } from "../components/DefaultPagination";

function CommentList() {
  const [comments, setComments] = useState<Comment[]>([]);

  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    getAllComments().then((response) => {
      setComments(response);
    });
  }, []);

  const commentsFiltered = comments.slice(
    currentPage * 50,
    currentPage * 50 + 50
  );

  return (
    <div className="flex flex-col space-y-4">
      {comments ? (
        <>
          {commentsFiltered.map((comment) => (
            <ListElement
              key={comment.id}
              id={comment.id}
              route={"/post/" + comment.postId}
              title={comment.name}
              body={comment.body}
              subtitle={"Post: " + comment.postId + "  Email: " + comment.email}
            />
          ))}
          <DefaultPagination
            page={currentPage}
            changePage={setCurrentPage}
            totalItems={comments.length}
            itemsPerPage={50}
          />
        </>
      ) : null}
    </div>
  );
}

export default CommentList;
