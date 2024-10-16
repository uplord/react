import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './store/postSlice';
import { Container, Row, Col, Card, Spinner, Pagination } from 'react-bootstrap';
import { useSearchParams, useNavigate } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Access state from the Redux store
  const { posts, loading, error } = useSelector((state) => state.posts);

  // Pagination state
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page')) || 1; // Get page from URL or default to 1
  const postsPerPage = 8;

  // Calculate indices for posts to display on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Fetch posts on component mount
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setSearchParams({ page: pageNumber });
  };

  // Create pagination items
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const paginationItems = [];

  for (let number = 1; number <= totalPages; number++) {
    paginationItems.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => handlePageChange(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

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

      <Row>
        {currentPosts.length > 0 &&
          currentPosts.map((post) => (
            <Col key={post.id} md={6} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.body}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <Pagination className="justify-content-center mt-4">
          {paginationItems}
        </Pagination>
      )}
    </Container>
  );
}

export default App;
