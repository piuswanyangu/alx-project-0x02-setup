// pages/posts.tsx (New file)

import React from 'react';
import Header from '../components/layout/Header'; // <-- IMPORT HEADER

const Posts: React.FC = () => {
  return (
    <>
      <Header /> {/* <-- ADD HEADER HERE */}
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8">📰 Posts Page</h1>
        <p className="text-gray-700">This page will eventually display a list of all posts.</p>
      </div>
    </>
  );
};

export default Posts;