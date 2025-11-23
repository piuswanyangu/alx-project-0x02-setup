// pages/home.tsx

import React, { useState } from 'react';
import Card from '@/components/common/Card'
import Header from '@/components/layout/Header';
import PostModal from '../components/common/PostModal';
import { Post } from '../interfaces'; // Import the new Post interface

const INITIAL_POSTS: Post[] = [
  { id: 1, title: 'Tailwind Integration', content: 'This card is styled entirely using utility classes, making it highly customizable and efficient.' },
  { id: 2, title: 'Flexible Layout', content: 'Using "flex-wrap" in the container allows these cards to automatically stack or wrap based on screen size.' },
];

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);

  const handlePostSubmit = (newPostData: { title: string; content: string }) => {
    const newPost: Post = {
      id: Date.now(), // Simple way to generate a unique ID
      title: newPostData.title,
      content: newPostData.content,
    };
    // Prepend the new post to the list
    setPosts([newPost, ...posts]); 
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">✨ Welcome to the Home Page!</h1>
      
      {/* Button to Open Modal */}
      <button 
        onClick={() => setIsModalOpen(true)}
        className="mb-6 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-150 shadow-lg"
      >
        ➕ Create New Post
      </button>

      {/* Dynamic Content Display */}
      <div className="flex flex-wrap justify-start">
        {/* Map over the state array to display all posts */}
        {posts.map((post) => (
          <Card key={post.id} title={post.title} content={post.content} />
        ))}
      </div>

      {/* Post Modal Component */}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onPostSubmit={handlePostSubmit}
      />
    </div>
  );
};

export default Home;