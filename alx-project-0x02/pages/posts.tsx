// pages/posts.tsx

import React, { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import PostCard from '../components/common/PostCard';
import { PostCardProps } from '../interfaces'; // Import the new interface

// Type assertion for the fetched data structure
type PostData = Omit<PostCardProps, 'content'> & { body: string };

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<PostCardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data: PostData[] = await response.json();

        // 💡 Map API fields to PostCardProps fields
        const formattedPosts: PostCardProps[] = data.map(item => ({
          userId: item.userId,
          id: item.id,
          title: item.title,
          content: item.body, // JSONPlaceholder uses 'body', we use 'content'
        }));
        
        setPosts(formattedPosts);
      } catch (error) {
        if (error instanceof Error)
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // Run only once on component mount

  return (
    <>
      <Header />
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">🌐 Public Blog Posts</h1>
        
        {loading && (
          <div className="text-center p-10">
            <p className="text-indigo-600 font-semibold">Loading posts from JSONPlaceholder...</p>
            {/* Simple loading spinner placeholder */}
            <div className="mt-4 animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            <strong className="font-bold">Error:</strong>
            <span className="block sm:inline"> {error}</span>
          </div>
        )}

        {!loading && posts.length > 0 && (
          <div className="space-y-4">
            {posts.map((post) => (
              <PostCard 
                key={post.id} 
                userId={post.userId} 
                id={post.id}
                title={post.title} 
                content={post.content} 
              />
            ))}
          </div>
        )}

        {!loading && posts.length === 0 && !error && (
          <p className="text-gray-500">No posts found.</p>
        )}
      </div>
    </>
  );
};

export default Posts;