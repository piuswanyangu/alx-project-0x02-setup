// pages/about.tsx

import React from 'react';
import Header from '../components/layout/Header';
import Button from '../components/common/Button';

const About: React.FC = () => {
  return (
    <>
      <Header />
      <div className="p-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">🛠️ About Our Components</h1>
        <p className="mb-10 text-gray-700">
          This page demonstrates the flexibility of the reusable <code className="bg-gray-100 p-1 rounded">Button</code> component 
          by varying its <code className="bg-gray-100 p-1 rounded">size</code> and <code className="bg-gray-100 p-1 rounded">shape</code> props.
        </p>

        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-6 items-start">
          
          <div className="p-4 border rounded-lg shadow-md bg-gray-50 w-full md:w-auto">
            <h3 className="font-semibold mb-3">Small Button</h3>
            <Button size="small" shape="rounded-sm">
              Confirm (Small)
            </Button>
          </div>

          <div className="p-4 border rounded-lg shadow-md bg-gray-50 w-full md:w-auto">
            <h3 className="font-semibold mb-3">Medium Button</h3>
            <Button size="medium" shape="rounded-md">
              Submit (Medium)
            </Button>
          </div>

          <div className="p-4 border rounded-lg shadow-md bg-gray-50 w-full md:w-auto">
            <h3 className="font-semibold mb-3">Large Button</h3>
            <Button size="large" shape="rounded-full">
              Proceed (Large)
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;