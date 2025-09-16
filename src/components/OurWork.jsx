// src/components/OurWork.jsx
import React from 'react';
import CaseStudyCard from './CaseStudyCard'; // You already have this import

function OurWork() {
  // 1. Define your case study data in an array of objects
  const caseStudies = [
    {
      title: "Tech Startup's Agile Transformation",
      description: "How we helped a fast-growing startup identify skill gaps to build two new high-performance scrum teams in under a month.",
      tags: ["Team Building", "Skill Mapping"]
    },
    {
      title: "Fortune 500 Onboarding Overhaul",
      description: "Reduced time-to-productivity for new engineering hires by 40% with data-driven, personalized onboarding plans.",
      tags: ["Onboarding", "Performance"]
    },
    {
      title: "Enterprise-Wide Upskilling Initiative",
      description: "Empowered a legacy company to launch a targeted upskilling program by visualizing their entire workforce's capabilities.",
      tags: ["Analytics", "Strategy"]
    }
  ];

  return (
    <div id="our-work" className='w-full bg-gray-100 font-["Neue_Montreal"] py-20 px-10 md:px-20'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-semibold text-zinc-900 mb-4'>
          See SkillC in Action
        </h2>
        <p className='text-lg md:text-xl max-w-3xl mb-12 text-zinc-600'>
          We're more than a platform; we're a partner in growth. See how we've helped organizations transform their approach to talent.
        </p>
        
        {/* 2. Map over the data array to dynamically render the cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {caseStudies.map((study, index) => (
            <CaseStudyCard 
              key={index}
              title={study.title}
              description={study.description}
              tags={study.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurWork;