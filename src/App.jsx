import React, { useEffect } from 'react';
import './App.css';
import CoreCards from './components/main-page/CoreCards';
import { juniorCoreTeam, seniorCoreTeam } from './components/main-page/CoreMembers';
import { Events_main } from './components/main-page/Events';
import EventCards from './components/main-page/EventCards';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';

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
      <Header handleScroll={handleScroll}/>

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
            {Events_main.map((event,index) => (
              <EventCards
                key = {index}
                title = {event.title}
                description={event.description}
              />
            ))}
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
              {seniorCoreTeam.map((member, index) => (
                <CoreCards
                  key={index}
                  role={member.role}
                  name={member.name}
                  description={member.description}
                />
              ))}
            </div>
          </div>

          {/* Junior Core Team */}
          <div className="team-group">
            <h3 className="team-title">Junior Core Team</h3>
            <div className="team-grid">
              {juniorCoreTeam.map((member, index) => (
                <CoreCards
                  key={index}
                  role={member.role}
                  name={member.name}
                  description={member.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
