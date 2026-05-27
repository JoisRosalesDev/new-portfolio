import React from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const Section = ({ id, children, className = '', title }: SectionProps) => {
  return (
    <section 
      id={id} 
      className={`min-h-screen py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-center ${className}`}
    >
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-prussian-blue-500 dark:text-white opacity-0 animate-fade-in-up">
          <span className="text-orange-500 mr-2">/</span>{title}
        </h2>
      )}
      <div className="opacity-0 animate-fade-in-up stagger-1">
        {children}
      </div>
    </section>
  );
};
