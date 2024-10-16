import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './store/postSlice';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';

function App() {
  const dispatch = useDispatch();

  // Access state from the Redux store
  const { posts, loading, error } = useSelector((state) => state.posts);

  // Dispatch fetchPosts when the component mounts
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

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
        {posts.length > 0 &&
          posts.map((post) => (
            <Col key={post.id} md={4} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.body}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default App;
