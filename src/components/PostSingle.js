import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../store/postSlice';

const SinglePost = () => {
  const { postId } = useParams(); // Get the postId from the URL
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(fetchPosts()); // Fetch posts if they are not already loaded
    }
  }, [dispatch, posts.length]);

  const post = posts.find((p) => p.id === parseInt(postId)); // Find the post by ID

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">Error: {error}</div>;

  // If post not found
  if (!post) {
    return <div className="text-red-500 text-center">Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-2xl font-bold mb-8">{post.title}</h1>
      <p className="text-gray-700 mb-6">{post.body}</p>
      <a href="/" className={`px-3 py-2 bg-gray-200 rounded hover:bg-gray-300`}>Back to Posts</a>
    </div>
  );
};

export default SinglePost;
