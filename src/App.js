import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './store/postSlice';
import { Container, Spinner, Alert } from 'react-bootstrap';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import { useSearchParams } from 'react-router-dom';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  // Query params for pagination
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page')) || 1;
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
    setSearchParams({ page: pageNumber });

    window.scrollTo(0, 0);
  };

  // Check if the current page is valid only when posts are fetched
  const isPageValid = posts.length > 0 && currentPage <= totalPages && currentPage >= 1;

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">Posts from JSONPlaceholder API</h1>

      {/* Show current page number */}
      <h3 className="text-center my-4">Page {currentPage}</h3>

      {/* Loading Spinner */}
      {loading && (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}

      {/* Error from fetching data */}
      {error && <p className="text-danger text-center">Error: {error}</p>}

      {/* Invalid page message, only show if posts have been loaded */}
      {!isPageValid && posts.length > 0 && (
        <Alert variant="danger" className="text-center">
          The page you are trying to access does not exist.
        </Alert>
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
    </Container>
  );
}

export default App;
