// accept title and content as props
import React from "react";
import { CardProps } from "@/interfaces";
const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{content}</p>
    </div>
  );
};
