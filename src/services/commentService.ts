import Comment from "../dtos/comment";

const baseUrl = "https://jsonplaceholder.typicode.com/comments/";

export async function getAllComments(): Promise<Comment[]> {
  const response = await fetch(baseUrl);
  if (response.ok) return response.json();
  throw response;
}

export async function getCommentById(id: number): Promise<Comment> {
  const response = await fetch(baseUrl + id);
  if (response.ok) return response.json();
  throw response;
}

export async function addCommentRequest(comment: Comment): Promise<void> {
  await fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  console.log("Added comment " + comment.id);
}

export async function editCommentRequest(comment: Comment): Promise<void> {
  await fetch(baseUrl + comment.id, {
    method: "PUT",
    body: JSON.stringify(comment),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  console.log("Edited comment " + comment.id);
}

export async function deleteCommentRequest(id: number): Promise<void> {
  await fetch(baseUrl + id, {
    method: "DELETE",
  });
  console.log("Deleted comment " + id);
}
