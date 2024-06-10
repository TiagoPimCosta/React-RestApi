import Post from "../dtos/posts";

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

export async function getPosts(): Promise<Post[]> {
  const response = await fetch(baseUrl);
  if (response.ok) return response.json();
  throw response;
}
