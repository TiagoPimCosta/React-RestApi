import Comment from "../dtos/comment";
import Post from "../dtos/post";

const baseUrl = "https://jsonplaceholder.typicode.com/";

export async function getAllPosts(): Promise<Post[]> {
  const response = await fetch(baseUrl + "posts/");
  if (response.ok) return response.json();
  throw response;
}
export async function getPostDetails(id: number): Promise<Post> {
  const response = await fetch(baseUrl + "posts/" + id);
  if (response.ok) return response.json();
  throw response;
}

export async function getPostComments(id: number): Promise<Comment[]> {
  const response = await fetch(baseUrl + "posts/" + id + "/comments");
  if (response.ok) return response.json();
  throw response;
}
export async function getAllComments(): Promise<Comment[]> {
  const response = await fetch(baseUrl + "comments");
  if (response.ok) return response.json();
  throw response;
}
