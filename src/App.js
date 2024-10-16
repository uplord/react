import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './store/postSlice';

function App() {
  const dispatch = useDispatch();

  // Access state from the Redux store
  const { posts, loading, error } = useSelector((state) => state.posts);

  // Dispatch fetchPosts when the component mounts
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Posts from JSONPlaceholder API</h1>
      <div className="post-list">
        {loading && <p>Loading posts...</p>}
        {error && <p>Error: {error}</p>}
        {posts.length > 0 &&
          posts.map((post) => (
            <div key={post.id} className="post">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
