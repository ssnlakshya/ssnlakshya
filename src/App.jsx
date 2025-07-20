import React, { useEffect } from 'react';
import './App.css';
import logo from './assets/logo.png';

function App() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      window.scrollTo({ top: element.offsetTop - headerHeight, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScrollAnimation = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const translateY = (scrollPosition / maxScroll) * 50; // Adjust range (e.g., 50px max shift)
      document.querySelector('.app-container::after').style.transform = `translateY(-${translateY}px)`; // Parallax for shine overlay
    };

    window.addEventListener('scroll', handleScrollAnimation);
    return () => window.removeEventListener('scroll', handleScrollAnimation); // Cleanup
  }, []);

  return (
    <div className="app-container">
      <iframe
        src="https://my.spline.design/tvatimedoor-QHzG0oAgnGc3mChstHAoZu7K/"
        frameBorder="0"
        width="100%"
        height="100%"
        className="spline-background"
      ></iframe>
      {/* Header with Logo and Navigation */}
      <header className="header">
        <div className="container header-content">
          <img src={logo} alt="Lakshya Logo" className="header-logo" />
          <nav className="nav">
            <a href="#events" className="nav-link" onClick={() => handleScroll('events')}>Events of Lakshya</a>
            <a href="#teams" className="nav-link" onClick={() => handleScroll('teams')}>Teams of Lakshya</a>
          </nav>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="welcome-section animate-section">
        <div className="container text-center">
          <h1 className="welcome-title">Welcome to Lakshya</h1>
          <p className="welcome-subtitle">Your journey in entrepreneurship starts here!</p>
          <a href="#membership" className="membership-button">Get Membership</a>
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero-section animate-section">
        <div className="container text-center">
          <h1 className="hero-title">Lakshya Entrepreneurship Club</h1>
          <p className="hero-subtitle">Empowering the next generation of innovators and leaders</p>
          <a href="#about" className="hero-button">Learn More</a>
        </div>
      </section>

      {/* What is Lakshya Section */}
      <section id="about" className="about-section animate-section">
        <div className="container">
          <h2 className="section-title">What is Lakshya?</h2>
          <p className="section-text">
            Lakshya is the Entrepreneurship Club dedicated to fostering innovation, creativity, and entrepreneurial spirit among students. We provide a platform for aspiring entrepreneurs to collaborate, learn, and grow through workshops, events, and mentorship programs. Our mission is to inspire and empower individuals to turn their ideas into reality.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="events-section animate-section">
        <div className="container">
          <h2 className="section-title">Events of Lakshya</h2>
          <div className="events-grid">
            <div className="event-card">
              <h3 className="event-title">Startup Pitch Night</h3>
              <p className="event-description">
                An exciting event where students pitch their startup ideas to a panel of judges and get valuable feedback.
              </p>
            </div>
            <div className="event-card">
              <h3 className="event-title">Entrepreneurship Workshop</h3>
              <p className="event-description">
                Hands-on workshops with industry experts to learn key entrepreneurial skills like business planning and marketing.
              </p>
            </div>
            <div className="event-card">
              <h3 className="event-title">Networking Mixer</h3>
              <p className="event-description">
                Connect with fellow entrepreneurs, alumni, and industry professionals to build your network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section id="teams" className="teams-section animate-section">
        <div className="container">
          <h2 className="section-title">Our Teams</h2>
          
          {/* Senior Core Team */}
          <div className="team-group">
            <h3 className="team-title">Senior Core Team</h3>
            <div className="team-grid">
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
                        <polygon
                          points="50,10 90,30 90,70 50,90 10,70 10,30"
                          fill="#e67e22"
                          stroke="#e67e22"
                          stroke-width="3"
                        ></polygon>
                        <polygon
                          points="50,20 80,35 80,65 50,80 20,65 20,35"
                          fill="#000000"
                          stroke="#e67e22"
                          stroke-width="2"
                        ></polygon>
                        <rect
                          x="35"
                          y="35"
                          width="30"
                          height="30"
                          fill="url(#brutal-pattern)"
                        ></rect>
                        <polygon points="50,25 70,40 50,55 30,40" fill="#e67e22"></polygon>
                        <circle cx="50" cy="45" r="8" fill="#000000"></circle>
                        <rect x="46" y="41" width="8" height="8" fill="#e67e22"></rect>
                        <polygon points="50,60 65,70 50,75 35,70" fill="#e67e22"></polygon>
                      </svg>
                    </div>
                    <div className="card-content">
                      <div className="product-title">President</div>
                      <div className="buy-button">
                        <div>SEE DETAILS</div>
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="added-text">John Doe</div>
                    <div className="added-subtext">President</div>
                    <div className="added-description">Leads the club with vision and strategy, overseeing all major initiatives.</div>
                  </div>
                </div>
              </div>
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
                        <polygon
                          points="50,10 90,30 90,70 50,90 10,70 10,30"
                          fill="#e67e22"
                          stroke="#e67e22"
                          stroke-width="3"
                        ></polygon>
                        <polygon
                          points="50,20 80,35 80,65 50,80 20,65 20,35"
                          fill="#000000"
                          stroke="#e67e22"
                          stroke-width="2"
                        ></polygon>
                        <rect
                          x="35"
                          y="35"
                          width="30"
                          height="30"
                          fill="url(#brutal-pattern)"
                        ></rect>
                        <polygon points="50,25 70,40 50,55 30,40" fill="#e67e22"></polygon>
                        <circle cx="50" cy="45" r="8" fill="#000000"></circle>
                        <rect x="46" y="41" width="8" height="8" fill="#e67e22"></rect>
                        <polygon points="50,60 65,70 50,75 35,70" fill="#e67e22"></polygon>
                      </svg>
                    </div>
                    <div className="card-content">
                      <div className="product-title">Vice President</div>
                      <div className="buy-button">
                        <div>SEE DETAILS</div>
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="added-text">Jane Smith</div>
                    <div className="added-subtext">Vice President</div>
                    <div className="added-description">Supports the president and manages internal operations.</div>
                  </div>
                </div>
              </div>
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
                        <polygon
                          points="50,10 90,30 90,70 50,90 10,70 10,30"
                          fill="#e67e22"
                          stroke="#e67e22"
                          stroke-width="3"
                        ></polygon>
                        <polygon
                          points="50,20 80,35 80,65 50,80 20,65 20,35"
                          fill="#000000"
                          stroke="#e67e22"
                          stroke-width="2"
                        ></polygon>
                        <rect
                          x="35"
                          y="35"
                          width="30"
                          height="30"
                          fill="url(#brutal-pattern)"
                        ></rect>
                        <polygon points="50,25 70,40 50,55 30,40" fill="#e67e22"></polygon>
                        <circle cx="50" cy="45" r="8" fill="#000000"></circle>
                        <rect x="46" y="41" width="8" height="8" fill="#e67e22"></rect>
                        <polygon points="50,60 65,70 50,75 35,70" fill="#e67e22"></polygon>
                      </svg>
                    </div>
                    <div className="card-content">
                      <div className="product-title">Event Coordinator</div>
                      <div className="buy-button">
                        <div>SEE DETAILS</div>
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="added-text">Alex Johnson</div>
                    <div className="added-subtext">Event Coordinator</div>
                    <div className="added-description">Organizes and manages all club events and workshops.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Junior Core Team */}
          <div className="team-group">
            <h3 className="team-title">Junior Core Team</h3>
            <div className="team-grid">
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
                        <polygon
                          points="50,10 90,30 90,70 50,90 10,70 10,30"
                          fill="#e67e22"
                          stroke="#e67e22"
                          stroke-width="3"
                        ></polygon>
                        <polygon
                          points="50,20 80,35 80,65 50,80 20,65 20,35"
                          fill="#000000"
                          stroke="#e67e22"
                          stroke-width="2"
                        ></polygon>
                        <rect
                          x="35"
                          y="35"
                          width="30"
                          height="30"
                          fill="url(#brutal-pattern)"
                        ></rect>
                        <polygon points="50,25 70,40 50,55 30,40" fill="#e67e22"></polygon>
                        <circle cx="50" cy="45" r="8" fill="#000000"></circle>
                        <rect x="46" y="41" width="8" height="8" fill="#e67e22"></rect>
                        <polygon points="50,60 65,70 50,75 35,70" fill="#e67e22"></polygon>
                      </svg>
                    </div>
                    <div className="card-content">
                      <div className="product-title">Social Media Manager</div>
                      <div className="buy-button">
                        <div>SEE DETAILS</div>
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="added-text">Emily Brown</div>
                    <div className="added-subtext">Social Media Manager</div>
                    <div className="added-description">Handles the club's online presence and promotions.</div>
                  </div>
                </div>
              </div>
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
                        <polygon
                          points="50,10 90,30 90,70 50,90 10,70 10,30"
                          fill="#e67e22"
                          stroke="#e67e22"
                          stroke-width="3"
                        ></polygon>
                        <polygon
                          points="50,20 80,35 80,65 50,80 20,65 20,35"
                          fill="#000000"
                          stroke="#e67e22"
                          stroke-width="2"
                        ></polygon>
                        <rect
                          x="35"
                          y="35"
                          width="30"
                          height="30"
                          fill="url(#brutal-pattern)"
                        ></rect>
                        <polygon points="50,25 70,40 50,55 30,40" fill="#e67e22"></polygon>
                        <circle cx="50" cy="45" r="8" fill="#000000"></circle>
                        <rect x="46" y="41" width="8" height="8" fill="#e67e22"></rect>
                        <polygon points="50,60 65,70 50,75 35,70" fill="#e67e22"></polygon>
                      </svg>
                    </div>
                    <div className="card-content">
                      <div className="product-title">Content Creator</div>
                      <div className="buy-button">
                        <div>SEE DETAILS</div>
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="added-text">Michael Lee</div>
                    <div className="added-subtext">Content Creator</div>
                    <div className="added-description">Creates engaging content for club events and updates.</div>
                  </div>
                </div>
              </div>
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
                        <polygon
                          points="50,10 90,30 90,70 50,90 10,70 10,30"
                          fill="#e67e22"
                          stroke="#e67e22"
                          stroke-width="3"
                        ></polygon>
                        <polygon
                          points="50,20 80,35 80,65 50,80 20,65 20,35"
                          fill="#000000"
                          stroke="#e67e22"
                          stroke-width="2"
                        ></polygon>
                        <rect
                          x="35"
                          y="35"
                          width="30"
                          height="30"
                          fill="url(#brutal-pattern)"
                        ></rect>
                        <polygon points="50,25 70,40 50,55 30,40" fill="#e67e22"></polygon>
                        <circle cx="50" cy="45" r="8" fill="#000000"></circle>
                        <rect x="46" y="41" width="8" height="8" fill="#e67e22"></rect>
                        <polygon points="50,60 65,70 50,75 35,70" fill="#e67e22"></polygon>
                      </svg>
                    </div>
                    <div className="card-content">
                      <div className="product-title">Outreach Coordinator</div>
                      <div className="buy-button">
                        <div>SEE DETAILS</div>
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="added-text">Sarah Davis</div>
                    <div className="added-subtext">Outreach Coordinator</div>
                    <div className="added-description">Manages partnerships and community outreach programs.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer animate-section">
        <div className="container text-center">
          <p className="footer-text">Lakshya Entrepreneurship Club © 2025</p>
          <div className="footer-links">
            <a href="#" className="footer-link">Facebook</a>
            <a href="#" className="footer-link">Twitter</a>
            <a href="#" className="footer-link">Instagram</a>
            <a href="#" className="footer-link">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
