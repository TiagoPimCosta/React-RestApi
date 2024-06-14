import { useEffect, useState } from "react";
import { getAllPosts } from "../services/postService";
import Post from "../dtos/post";
import { ListElement } from "../components";
import { DefaultPagination } from "../components/DefaultPagination";

function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    getAllPosts().then((response) => {
      setPosts(response);
    });
  }, []);

  const postFiltered = posts.slice(currentPage * 10, currentPage * 10 + 10);
  return (
    <div className="flex flex-col items-center space-y-4">
      {posts ? (
        <>
          {postFiltered.map((post) => (
            <ListElement
              key={post.id}
              id={post.id}
              route={"/post/" + post.id}
              title={post.title}
              body={post.body}
            />
          ))}
          <DefaultPagination
            page={currentPage}
            changePage={setCurrentPage}
            totalItems={posts.length}
            itemsPerPage={10}
          />
        </>
      ) : null}
    </div>
  );
}

export default PostList;
