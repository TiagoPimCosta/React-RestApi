import Comment from "../dtos/comment";
import Post from "../dtos/post";

const baseUrl = "https://jsonplaceholder.typicode.com/posts/";

export async function getAllPosts(): Promise<Post[]> {
  const response = await fetch(baseUrl);
  if (response.ok) return response.json();
  throw response;
}
export async function getPostDetails(id: number): Promise<Post> {
  const response = await fetch(baseUrl + id);
  if (response.ok) return response.json();
  throw response;
}

export async function getPostComments(id: number): Promise<Comment[]> {
  const response = await fetch(baseUrl + id + "/comments");
  if (response.ok) return response.json();
  throw response;
}
