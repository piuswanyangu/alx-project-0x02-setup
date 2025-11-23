// components/common/UserCard.tsx

import React from 'react';
import { UserProps } from '../../interfaces'; // Adjust path as necessary

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website, address, company }) => {
  const fullAddress = `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`;

  return (
    <div className="border border-gray-200 rounded-xl p-6 shadow-lg bg-white w-full transition hover:shadow-xl hover:border-indigo-300">
      
      {/* Name and Username */}
      <div className="flex items-center mb-4 border-b pb-2">
        <div className="bg-indigo-100 text-indigo-700 font-bold text-xl h-12 w-12 flex items-center justify-center rounded-full mr-4">
          {name.charAt(0)}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">@{username}</p>
        </div>
      </div>
      
      {/* Contact Details */}
      <div className="space-y-2 text-sm text-gray-700 mb-4">
        <p className="flex items-center">
          {/* Email Icon (using inline SVG for simplicity) */}
          <svg className="w-4 h-4 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 4v7a2 2 0 002 2h14a2 2 0 002-2v-7"></path></svg>
          <a href={`mailto:${email}`} className="text-indigo-600 hover:text-indigo-800">{email}</a>
        </p>
        <p className="flex items-center">
          {/* Phone Icon */}
          <svg className="w-4 h-4 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.128a11.042 11.042 0 005.516 5.516l1.128-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
          {phone.split(' ')[0]}
        </p>
        <p className="flex items-center">
          {/* Website Icon */}
          <svg className="w-4 h-4 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
          <a href={`http://${website}`} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">{website}</a>
        </p>
      </div>
      
      {/* Address and Company */}
      <div className="mt-4 pt-3 border-t text-xs">
        <p className="font-semibold text-gray-600 mb-1">
          Company: <span className="font-normal text-gray-700">{company.name}</span>
        </p>
        <p className="font-semibold text-gray-600 mb-1">
          Location: <span className="font-normal text-gray-700">{fullAddress}</span>
        </p>
        <p className="italic text-gray-500 mt-2"></p>
      </div>
    </div>
  );
};

export default UserCard;