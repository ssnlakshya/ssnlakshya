import React, { useRef } from 'react';
import { teams } from '../data/teams';
import TeamSection from '../components/TeamSection';

const Teams = () => {
  const sectionRefs = useRef({});

  const scrollToSection = (teamName) => {
    const element = sectionRefs.current[teamName];
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div id="teams" className="min-h-screen overflow-x-hidden pt-8">
      {/* Main Header */}
      <div className="text-center w-full max-w-6xl mx-auto mt-0 mb-10">
        <h1 className="text-6xl font-bold gradient-text mb-4 text-center">MEET OUR TEAM</h1>
        <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
      </div>

      {/* Navigation Bar */}
      <div className="team-category-btns flex flex-row flex-nowrap justify-center w-full max-w-5xl mx-auto mb-12">
        {Object.keys(teams).map((teamName, idx, arr) => (
          <button
            key={teamName}
            onClick={() => scrollToSection(teamName)}
            className={`team-category-btn${idx !== arr.length - 1 ? ' mr-6' : ''}`}
          >
            {teamName}
          </button>
        ))}
      </div>

      {/* Team Sections */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="space-y-24">
          {Object.entries(teams).map(([teamName, members]) => (
            <div 
              key={teamName} 
              ref={(el) => (sectionRefs.current[teamName] = el)}
              className="scroll-mt-[100px] text-center"
            >
              <TeamSection 
                title={teamName} 
                members={members}
              />
            </div>
          ))}
        </div>
        {/* Footer CTA */}
        <div className="text-center mt-24">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-6 rounded-full inline-block">
            <p className="text-xl font-semibold">Ready to join our team?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
