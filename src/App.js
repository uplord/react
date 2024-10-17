import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PostsPage from './pages/Posts';
import PostPage from './pages/Post';

function App() {

  return (
    <div className="container mx-auto my-8 px-4">
      <Header />
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="/page/:pageNumber" element={<PostsPage />} />
        <Route path="/post/:postId" element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default App;
