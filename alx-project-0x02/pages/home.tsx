// pages/home.tsx

import React from 'react';
import Card from '@/components/common/Card'; // Adjust path as necessary

const Home: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">✨ Welcome to the Home Page!</h1>
      <div
        // Tailwind classes for layout:
        // flex (display flex), flex-wrap (allow wrapping), justify-start
        className="flex flex-wrap justify-start"
      >
        {/* Card 1: Default Information */}
        <Card
          title="Tailwind Integration"
          content="This card is now styled entirely using utility classes, making it highly customizable and efficient."
        />

        {/* Card 2: Layout Check */}
        <Card
          title="Flexible Layout"
          content="Using 'flex-wrap' in the container allows these cards to automatically stack or wrap based on screen size."
        />

        {/* Card 3: Modern Look */}
        <Card
          title="Component Styling"
          content="The design leverages standard Tailwind utilities for borders, shadows, and padding for a clean, modern look."
        />
      </div>
    </div>
  );
};

export default Home;