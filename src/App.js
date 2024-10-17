import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Page from './components/PostPage';
import PostSingle from './components/PostSingle';

function App() {

  return (
    <div className="container mx-auto my-8 px-4">
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/page/:pageNumber" element={<Page />} />
        <Route path="/post/:postId" element={<PostSingle />} />
      </Routes>
    </div>
  );
}

export default App;
