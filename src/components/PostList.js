import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.map((post) => (
        <Link to={`/post/${post.id}`} key={post.id} className="border p-4 rounded hover:border-red-200">
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <p className="text-gray-700">{post.body}</p>
        </Link>
      ))}
    </div>
  );
};

export default PostList;
