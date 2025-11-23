// components/common/PostCard.tsx

import React from 'react';
import { PostCardProps } from '../../interfaces'; // Adjust path as necessary

const PostCard: React.FC<PostCardProps> = ({ userId, id, title, content }) => {
  return (
    <div className="border border-gray-200 rounded-xl p-6 mb-6 shadow-lg bg-white w-full transition hover:shadow-xl">
      <div className="flex justify-between items-start mb-3 border-b pb-2">
        <h3 className="text-xl font-bold text-indigo-700 leading-snug">
          {title}
        </h3>
        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full ml-4">
          Post #{id}
        </span>
      </div>
      <p className="text-gray-700 mb-4 whitespace-pre-wrap">
        {content}
      </p>
      <div className="text-sm font-medium text-right text-gray-600 border-t pt-2">
        Author ID: <span className="text-indigo-600">{userId}</span>
      </div>
    </div>
  );
};

export default PostCard;