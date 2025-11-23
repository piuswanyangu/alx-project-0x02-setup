// components/layout/Header.tsx

import React from 'react';
import Link from 'next/link'; // Import Next.js Link for client-side routing
import { useRouter } from 'next/router'; // Hook to check the current path

const navLinks = [
  { href: '/', label: 'Home' }, // Assuming '/' also routes to Home
  { href: '/about', label: 'About' },
  { href: '/posts', label: 'Posts' },
];

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className="bg-gray-800 p-4 shadow-md sticky top-0 z-40">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo/Brand */}
        <div className="text-white text-2xl font-bold">
          <Link href="/">
            <span className="hover:text-indigo-400 cursor-pointer transition duration-150">
              ALX Project
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            {navLinks.map((link) => {
              // Check if the current route matches the link's href
              const isActive = router.pathname === link.href;
              
              return (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span
                      className={`
                        text-lg font-medium transition duration-150 cursor-pointer
                        ${isActive 
                          ? 'text-indigo-400 border-b-2 border-indigo-400' 
                          : 'text-gray-300 hover:text-white'
                        }
                      `}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;