// pages/about.tsx

import React from 'react';
import Button from '../components/common/Button'; // Adjust path as necessary

const About: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">🛠️ About Our Components</h1>
      <p className="mb-6 text-gray-700">
        Here we demonstrate the flexibility and reusability of the custom Button component by applying different combinations of 
        <code className="bg-gray-100 p-1 rounded">size</code> and <code className="bg-gray-100 p-1 rounded">shape</code> props.
      </p>

      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-6 items-start">
        {/* Example 1: Small & Rounded-sm */}
        <div className="p-4 border rounded-lg shadow-sm w-full md:w-auto">
          <h3 className="font-semibold mb-2">Small Button (Default Action)</h3>
          <Button size="small" shape="rounded-sm" onClick={() => alert('Clicked Small')}>
            Small & Square
          </Button>
          <p className="text-sm mt-2 text-gray-500">Props:</p>
        </div>

        {/* Example 2: Medium & Rounded-md */}
        <div className="p-4 border rounded-lg shadow-sm w-full md:w-auto">
          <h3 className="font-semibold mb-2">Medium Button (Default Look)</h3>
          <Button size="medium" shape="rounded-md" onClick={() => alert('Clicked Medium')}>
            Medium & Rounded
          </Button>
          <p className="text-sm mt-2 text-gray-500">Props: (default)</p>
        </div>

        {/* Example 3: Large & Rounded-full */}
        <div className="p-4 border rounded-lg shadow-sm w-full md:w-auto">
          <h3 className="font-semibold mb-2">Large Button (Primary Action)</h3>
          <Button size="large" shape="rounded-full" onClick={() => alert('Clicked Large')}>
            Large & Pill-Shaped
          </Button>
          <p className="text-sm mt-2 text-gray-500">Props: </p>
        </div>
      </div>
    </div>
  );
};

export default About;