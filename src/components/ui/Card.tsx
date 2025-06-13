import React from 'react';
interface CardProps {
  children: React.ReactNode;
  className?: string;
}
export const Card = ({
  children,
  className = ''
}: CardProps) => {
  return <div className={`
        bg-white backdrop-blur-sm bg-opacity-80 rounded-2xl shadow-sm border border-gray-100
        hover:shadow-md transition-shadow duration-300 ${className}
      `}>
      {children}
    </div>;
};