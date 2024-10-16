import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './store/postSlice';
import { Container, Spinner } from 'react-bootstrap';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import { useSearchParams } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page')) || 1;
  const postsPerPage = 8;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handlePageChange = (pageNumber) => {
    setSearchParams({ page: pageNumber });
  };

  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">Posts from JSONPlaceholder API</h1>

      {loading && (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}

      {error && <p className="text-danger text-center">Error: {error}</p>}

      <PostList posts={currentPosts} />

      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      )}
    </Container>
  );
}

export default App;
