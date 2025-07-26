import React from 'react';

const CoreCards = ({ role, name, description }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <div className="product-image">
            <svg
              className="product-svg"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="brutal-pattern"
                  patternUnits="userSpaceOnUse"
                  width="8"
                  height="8"
                >
                  <rect width="8" height="8" fill="#e67e22"></rect>
                  <rect width="4" height="4" fill="#000000"></rect>
                  <rect x="4" y="4" width="4" height="4" fill="#000000"></rect>
                </pattern>
              </defs>
              <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="#e67e22" stroke="#e67e22" strokeWidth="3" />
              <polygon points="50,20 80,35 80,65 50,80 20,65 20,35" fill="#000000" stroke="#e67e22" strokeWidth="2" />
              <rect x="35" y="35" width="30" height="30" fill="url(#brutal-pattern)" />
              <polygon points="50,25 70,40 50,55 30,40" fill="#e67e22" />
              <circle cx="50" cy="45" r="8" fill="#000000" />
              <rect x="46" y="41" width="8" height="8" fill="#e67e22" />
              <polygon points="50,60 65,70 50,75 35,70" fill="#e67e22" />
            </svg>
          </div>
          <div className="card-content">
            <div className="product-title">{role}</div>
            <div className="buy-button"><div>SEE DETAILS</div></div>
          </div>
        </div>
        <div className="card-back">
          <div className="added-text">{name}</div>
          <div className="added-subtext">{role}</div>
          <div className="added-description">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default CoreCards;
