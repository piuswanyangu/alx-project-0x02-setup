// Create a PostModal component in components/common/PostModal.tsx.
// Implement a form inside the modal to accept user input for title and content.
// Pass the data back to the parent component and display the newly added content on the /home page.
// Add a button to open the modal.

// components/common/PostModal.tsx

import React, { useState } from 'react';
import { PostModalProps } from '../../interfaces'; // Adjust path as necessary

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onPostSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      onPostSubmit({ title, content });
      // Reset form fields
      setTitle('');
      setContent('');
      onClose(); // Close the modal after submission
    }
  };

  return (
    // 1. Modal Overlay
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex justify-center items-start pt-10">
      
      {/* 2. Modal Content Container */}
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full relative">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Create New Post</h2>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-3xl leading-none"
        >
          &times;
        </button>

        {/* 3. Post Form */}
        <form onSubmit={handleSubmit}>
          
          {/* Title Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="post-title">
              Title
            </label>
            <input
              id="post-title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter a descriptive title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Content Input */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="post-content">
              Content
            </label>
            <textarea
              id="post-content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your post content here..."
              rows={4}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150"
            >
              Publish Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;