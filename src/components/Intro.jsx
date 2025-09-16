import React from 'react';

function Intro() {
  return (
    <div className='w-full min-h-screen bg-[#212121] text-[#F5F5F5] font-["Neue_Montreal"] py-20 px-10 md:px-20'>
      <div className='max-w-6xl mx-auto border-b-[1px] border-gray-600 pb-20'>
        
        {/* Headline */}
        <h1 className='text-4xl md:text-6xl font-semibold leading-tight border-b-[1px] border-gray-600 pb-8'>
          We're Closing the Gap Between Talent and Opportunity.
        </h1>

        {/* Introduction */}
        <div className='mt-12'>
          <p className='text-lg md:text-xl max-w-4xl leading-relaxed font-["Neue_Montreal"]'>
            SkillC is an simple but powerful observation: the most successful projects are powered by the right people, yet finding the right people is often left to guesswork. We are a team of strategists, developers, and data scientists dedicated to transforming how organizations build teams. We believe that by understanding and visualizing employee skills, we can create a more efficient, productive, and fulfilling workplace for everyone.
          </p>
        </div>

        {/* Our Mission */}
        <div className='mt-16'>
          <h2 className='text-3xl md:text-4xl font-semibold mb-6'>Our Mission</h2>
          <p className='text-lg md:text-xl max-w-4xl leading-relaxed'>
            Our mission is to empower leaders with the strategic talent intelligence they need to build the future. We replace ambiguity with data, providing a clear, actionable platform that pinpoints skill gaps, identifies hidden potential, and assembles high-impact teams that drive real results. We are committed to helping companies build not just better products, but stronger, more capable teams.
          </p>
        </div>

        {/* Our Approach */}
        <div className='mt-16 border-t-[1px] border-gray-600 pt-8'>
          <h2 className='text-3xl md:text-4xl font-semibold mb-8'>Our Approach</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            <div className='p-6 bg-[#333333] rounded-lg'>
              <h3 className='text-2xl font-semibold mb-3 text-[#E5005F]'>1. Visualize</h3>
              <p className='leading-relaxed'>To solve a problem, you first need to see it clearly. Our platform creates a dynamic, real-time map of your entire organization's skill set.</p>
            </div>
            <div className='p-6 bg-[#333333] rounded-lg'>
              <h3 className='text-2xl font-semibold mb-3 text-[#E5005F]'>2. Analyze</h3>
              <p className='leading-relaxed'>We go beyond surface-level data to provide deep, actionable insights, identifying critical gaps and strategic strengths.</p>
            </div>
            <div className='p-6 bg-[#333333] rounded-lg'>
              <h3 className='text-2xl font-semibold mb-3 text-[#E5005F]'>3. Assemble</h3>
              <p className='leading-relaxed'>Armed with this intelligence, our platform enables managers to build synergistic teams with precision and confidence.</p>
            </div>
          </div>
        </div>

        {/* Meet the Team */}
        <div className='mt-16'>
          <h2 className='text-3xl md:text-4xl font-semibold mb-6'>Meet the Team</h2>
          <p className='text-lg md:text-xl max-w-4xl leading-relaxed'>
            SkillC is brought to you by a passionate team of innovators with a shared vision for the future of work.
            {/* You can map over a team array here later */}
          </p>
        </div>

        {/* Call to Action */}
        <div className='mt-20 text-center border-t-[1px] border-gray-600 pt-10'>
          <p className='text-xl mb-4'>Interested in the future of team building?</p>
          <button className='bg-[#E5005F] text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-opacity-80 transition-colors'>
            Get In Touch
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default Intro;