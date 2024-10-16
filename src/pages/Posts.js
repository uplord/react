// src/pages/PostsPage.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPosts } from '../store/posts';
import PostList from '../components/PostList';
import Pagination from '../components/Pagination';

const PostsPage = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  const navigate = useNavigate();
  const { pageNumber } = useParams();
  const currentPage = parseInt(pageNumber) || 1;
  const postsPerPage = 8;

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Total number of pages
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Fetch posts on mount
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    navigate(`/page/${pageNumber}`);
    window.scrollTo(0, 0);
  };

  const isPageValid = posts.length > 0 && currentPage <= totalPages && currentPage >= 1;

  return (
    <div>
      <h1 className="text-center text-2xl font-bold mb-4">Posts from JSONPlaceholder API</h1>

      <div className="text-center mb-4">
        <strong>{currentPage}</strong>
        <span className="mx-1">/</span>
        <span>{totalPages}</span>
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="flex justify-center">
          <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin"></div>
        </div>
      )}

      {/* Error from fetching data */}
      {error && <p className="text-red-500 text-center">Error: {error}</p>}

      {/* Invalid page message */}
      {!isPageValid && posts.length > 0 && (
        <div className="text-center text-red-500">
          The page you are trying to access does not exist.
        </div>
      )}

      {/* Post list when page is valid */}
      {isPageValid && (
        <>
          <PostList posts={currentPosts} />
          {totalPages > 1 && (
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          )}
        </>
      )}
    </div>
  );
};

export default PostsPage;
