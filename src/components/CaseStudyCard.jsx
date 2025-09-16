// src/components/CaseStudyCard.jsx
import React from 'react';

function CaseStudyCard({ title, description, tags }) {
  return (
    <div className='bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col'>
      <div className='flex-grow'>
        <h3 className='text-2xl font-semibold mb-3 text-zinc-900'>{title}</h3>
        <p className='text-zinc-700 mb-4'>{description}</p>
      </div>
      <div className='mt-4'>
        {tags.map((tag, index) => (
          <span key={index} className='inline-block bg-pink-100 text-[#E5005F] text-sm font-semibold mr-2 px-3 py-1 rounded-full'>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default CaseStudyCard;