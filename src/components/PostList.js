import React from 'react';

const PostList = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.map((post) => (
        <div key={post.id} className="border p-4 rounded shadow hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <p className="text-gray-700">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
