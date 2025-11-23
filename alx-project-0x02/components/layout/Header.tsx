// header goes here
// components/Header.tsx

import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
      <nav>
        {/* The Link component handles client-side routing */}
        <Link href="/home" style={{ marginRight: '15px' }}>
          Home
        </Link>
        <Link href="/about">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;