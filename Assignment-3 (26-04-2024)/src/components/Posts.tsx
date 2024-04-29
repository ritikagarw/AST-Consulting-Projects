import React from "react";
import { useGetPostsQuery } from "../api/apiSlice";

const PostList: React.FC = () => {
  const { data: posts = [], isLoading, isError } = useGetPostsQuery();

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error fetching posts.</div>
      ) : (
        <ul>
          {posts.map((post: { id: React.Key; title: string; }) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;
