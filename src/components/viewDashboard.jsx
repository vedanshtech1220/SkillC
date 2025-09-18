// src/components/ViewDashboard.jsx

import React from 'react';
import { Link } from 'react-router-dom';

// Helper components for icons
const SkillHealthIcon = ({ health }) => {
  const color = health === 'green' ? 'bg-green-500' : health === 'yellow' ? 'bg-yellow-500' : 'bg-red-500';
  return <span className={`w-3 h-3 rounded-full ${color} inline-block mr-2`}></span>;
};

const AlertIcon = ({ type }) => {
  const text = type === 'gap' ? '⚠️' : type === 'opportunity' ? '💡' : '✅';
  return <span className='mr-3 text-xl'>{text}</span>;
};

// The component now accepts props
function ViewDashboard({ user, topSkills, activeProjects, alerts }) {
  return (
    <div className='w-full min-h-screen bg-[#212121] text-white p-8 font-["Neue_Montreal"]'>
      <div className='max-w-7xl mx-auto'>

        <header className='mb-12'>
          <h1 className='text-4xl font-semibold'>Welcome back, {user ? user.fullName : 'Guest'}!</h1>
          <p className='text-zinc-400 mt-2'>Here's your team's overview for today, September 18th, 2025.</p>
        </header>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <div className='lg:col-span-1 flex flex-col gap-8'>
            <div className='bg-[#2d2d2d] p-6 rounded-lg'>
              <h2 className='text-xl font-semibold mb-4'>Start a New Project</h2>
              <p className='text-zinc-400 mb-6'>Assemble the perfect team for your next initiative.</p>
              <Link to="/create-team" className='w-full text-center block bg-[#E5005F] text-white font-bold py-3 px-4 rounded-md hover:bg-opacity-90 transition-colors'>
                + Create New Project Team
              </Link>
            </div>
            <div className='bg-[#2d2d2d] p-6 rounded-lg'>
              <h2 className='text-xl font-semibold mb-4'>Alerts & Insights</h2>
              <div className='space-y-4'>
                {alerts.map((alert, index) => (
                  <div key={index} className='flex items-start bg-zinc-700/50 p-3 rounded-md'>
                    <AlertIcon type={alert.type} />
                    <p className='text-sm text-zinc-300'>{alert.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='lg:col-span-2 flex flex-col gap-8'>
            <div className='bg-[#2d2d2d] p-6 rounded-lg'>
              <h2 className='text-xl font-semibold mb-4'>Your Team's Top Skills</h2>
              <div className='space-y-3'>
                {topSkills.map((skill, index) => (
                  <div key={index}>
                    <div className='flex justify-between text-sm text-zinc-300 mb-1'>
                      <span>{skill.name}</span>
                      <span>{skill.members} Members</span>
                    </div>
                    <div className='w-full bg-zinc-700 rounded-full h-2.5'>
                      <div className='bg-[#E5005F] h-2.5 rounded-full' style={{ width: `${skill.members * 10}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='bg-[#2d2d2d] p-6 rounded-lg'>
              <h2 className='text-xl font-semibold mb-4'>Active Projects</h2>
              <div className='space-y-4'>
                {activeProjects.map((project, index) => (
                  <div key={index} className='flex justify-between items-center bg-zinc-700/50 p-4 rounded-md hover:bg-zinc-700 transition-colors'>
                    <div>
                      <h3 className='font-semibold'>{project.name}</h3>
                      <p className='text-sm text-zinc-400'>{project.members} Members</p>
                    </div>
                    <div className='flex items-center text-sm'>
                      <SkillHealthIcon health={project.health} />
                      <span>{project.health === 'green' ? 'Healthy' : 'Needs Attention'}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewDashboard;