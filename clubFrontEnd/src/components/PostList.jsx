import React from "react";
import PostCarde from "@/components/PostCarde";

const PostList = ({ posts }) => {
  return (
    <div className="flex-col space-y-2 my-4">
      {posts.map((post) => {
        return <PostCarde post={post} />;
      })}
      {posts.map((post) => {
        return <PostCarde post={post} />;
      })}
    </div>
  );
};

export default PostList;
