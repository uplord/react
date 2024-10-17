import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSinglePost } from '../store/posts';

const SinglePost = () => {
  const { postId } = useParams(); // Get the postId from the URL
  const dispatch = useDispatch();
  const { singlePost, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchSinglePost(postId)); // Fetch single post based on postId
  }, [dispatch, postId]);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">Error: {error}</div>;

  // If post not found
  if (!singlePost) {
    return <div className="text-red-500 text-center">Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-2xl font-bold mb-8">{singlePost.title}</h1>
      <p className="text-gray-700 mb-6">{singlePost.body}</p>
      <Link to="/" className={`px-3 py-2 bg-gray-200 rounded hover:bg-gray-300`}>Back to Posts</Link>
    </div>
  );
};

export default SinglePost;
