// CardsPage.tsx
import React from 'react';
import TransparentCard from './TransparentCard';
import Card from './Card';

const CardsPage = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <TransparentCard />
          
          {Array.from({ length: 5 }).map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsPage;
