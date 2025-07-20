import React from 'react';
import linkedinIcon from '../assets/logos/linkedin.svg';

const TeamSection = ({ title, members }) => {
  return (
    <section className="team-section mb-16 p-8 mx-4 text-center">
      {/* Team Title */}
      <div className="text-center mb-12 w-full">
        <h2 className="text-4xl font-bold gradient-text mb-4 text-center">{title}</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-3 gap-6 px-8 text-center">
        {members.map((member, index) => (
          <div key={index} className="team-card flip-card text-center">
            <div className="flip-card-inner">
              {/* Card Front */}
              <div className="flip-card-front card-content text-center">
                <div className="profile-container text-center">
                  <div className="relative">
                    <img 
                      src={'/assets/team-photos/image.png'}
                      alt={member.name}
                      className="profile-image transition-all duration-300" 
                    />
                  </div>
                </div>
                <h3 className="grid-name text-center">{member.name}</h3>
                <div className="member-info text-center mb-3">
                  <p className="text-orange-400 font-semibold text-sm mb-1">{member.year}</p>
                  <p className="text-gray-300 text-xs">{member.department}</p>
                </div>
              </div>
              {/* Card Back */}
              <div className="flip-card-back card-content text-center flex flex-col items-center justify-center">
                <h3 className="grid-name text-center mb-4">{member.name}</h3>
                <div className="flex-1 flex items-center justify-center w-full">
                  <p className="team-description text-center mx-auto">{member.desc}</p>
                </div>
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="linkedin-connect-btn-rect flex items-center justify-start mt-12"
                >
                  <span className="linkedin-logo-circle flex items-center justify-center">
                    <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
                  </span>
                  <span className="linkedin-connect-text ml-6">Connect</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
