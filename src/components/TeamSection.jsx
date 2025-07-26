import React, { useState, useEffect } from 'react';
import linkedinIcon from '../assets/logos/linkedin.svg';

const TeamSection = ({ title, members }) => {
  const [flippedIndices, setFlippedIndices] = useState([]);

  // Reset all flips on mount (when returning from LinkedIn)
  useEffect(() => {
    setFlippedIndices([]);
  }, []);

  const toggleFlip = (index) => {
    setFlippedIndices((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="team-section mb-16 p-8 mx-4 text-center">
      <div className="text-center mb-12 w-full">
        <h2 className="text-4xl font-bold gradient-text mb-4 text-center">{title}</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-3 gap-6 px-8 text-center">
        {members.map((member, index) => {
          const isFlipped = flippedIndices.includes(index);

          return (
            <div
              key={index}
              className={`team-card flip-card text-center ${isFlipped ? 'flipped' : ''}`}
              onClick={() => toggleFlip(index)}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front card-content text-center">
                  <div className="profile-container text-center">
                    <div className="relative">
                      <img
                        src={member.img}
                        alt={member.name}
                        className="profile-image transition-all duration-300 w-56 h-56 object-cover rounded-full mx-auto border-4 border-orange-400"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center mt-4 mb-2">
                    <h3 className="grid-name text-center text-2xl font-bold leading-tight mb-0">{member.name}</h3>
                    <span className="member-role text-base font-medium text-orange-500 mt-0.5">{member.role}</span>
                  </div>
                  <div className="member-info text-center mb-3">
                    <p className="text-orange-400 font-semibold text-sm mb-1">{member.year}</p>
                    <p className="text-gray-300 text-xs">{member.department}</p>
                  </div>
                </div>

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
                    onClick={(e) => e.stopPropagation()} // prevent card flip on link click
                  >
                    <span className="linkedin-logo-circle flex items-center justify-center">
                      <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
                    </span>
                    <span className="linkedin-connect-text ml-6">Connect</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TeamSection;
