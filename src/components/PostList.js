import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const PostList = ({ posts }) => {
  return (
    <Row>
      {posts.length > 0 &&
        posts.map((post) => (
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
  );
};

export default PostList;