import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Comment from "../dtos/comment";
import { getCommentById } from "../services/commentService";

type ListElementProps = {
  id: number;
  route?: string;
  title: string;
  subtitle?: string;
  body: string;
  isEditable?: boolean;
  onEdit?: (comment: Comment) => void;
  onDelete?: (id: number) => void;
};

function ListElement({
  id,
  route = undefined,
  title,
  subtitle = undefined,
  body,
  isEditable = false,
  onEdit = undefined,
  onDelete = undefined,
}: ListElementProps) {
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);

  const [name, setName] = useState<string>(title);
  const [email, setEmail] = useState<string>(subtitle || "");
  const [comment, setComment] = useState<string>(body);

  function nextPath() {
    route ? navigate(route) : null;
  }

  const handleEditing = () => {
    setEditing(!editing);
  };
  const submitEdit = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const response = await getCommentById(id);
    onEdit
      ? onEdit({ id, postId: response.postId, name, email, body: comment })
      : null;
    handleEditing();
  };

  return editing ? (
    <form className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-2">Edit comment {id}</h3>
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
        <label className="block text-gray-700 font-bold mb-2">Email</label>
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
        <label className="block text-gray-700 font-bold mb-2">Comment</label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="body"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Enter your comment"
        ></textarea>
      </div>
      <button
        className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
        onClick={submitEdit}
      >
        Submit
      </button>
    </form>
  ) : (
    <div
      key={id}
      className="bg-white p-4 rounded-lg shadow-md"
      onClick={nextPath}
    >
      <h3 className="text-lg font-bold">
        {id}. {name}
      </h3>
      <p className="text-gray-700 text-sm mb-2">{email}</p>
      <p className="text-gray-700">{comment}</p>
      {isEditable ? (
        <div className="flex gap-2">
          <button
            className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleEditing}
          >
            Edit
          </button>
          <button
            className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={() => (onDelete ? onDelete(id) : null)}
          >
            Delete
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default ListElement;
