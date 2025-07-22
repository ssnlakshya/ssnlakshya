import { useState, useRef } from "react";
import SlickSlider from '../components/SlickSlider.jsx';

export default function EventsPage() {
  return (
    <div className="gradient-bg-shimmer text-white font-display">
      <Hero />
      <EventsSection />
      <footer className="footer animate-section">
        <div className="container text-center py-8">
          <p className="footer-text text-sm mb-3 text-gray-400">
            Lakshya Entrepreneurship Club © 2025
          </p>
          <div className="footer-links flex justify-center gap-6 text-sm flex-wrap">
            <a href="#" className="footer-link hover:text-lakshya-accent-yellow duration-300">Facebook</a>
            <a href="#" className="footer-link hover:text-lakshya-accent-yellow duration-300">Twitter</a>
            <a href="#" className="footer-link hover:text-lakshya-accent-yellow duration-300">Instagram</a>
            <a href="#" className="footer-link hover:text-lakshya-accent-yellow duration-300">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

import MoneyAnimation from "../components/MoneyAnimation";

function Hero() {

  return (
    <div className="hero-section w-full relative overflow-hidden text-center py-16 px-4">
      {/* Coin animation layer */}
      <MoneyAnimation />

      {/* Hero content sits above; raise z-index using Tailwind if needed */}
      <h1 className="neon-text relative z-10" style={{ fontFamily: "var(--font-display)" }}>
        Events of Lakshya
      </h1>
      <p className="text-xl mb-8 relative z-10" style={{ fontFamily: "var(--font-display)" }}>
        Discover upcoming workshops, competitions, and networking opportunities
      </p>
    </div>
  );
}





function EventsSection() {
  const events = {
    Workshops: [
      {
        title: "Sycon",
        shortDesc:
          "Inspiring talks and interactive sessions to learn, connect and grow",
        dateISO: "2025-07-25",
        location: "Main Seminar Hall",
        accentColor: "#FF6B35",
      },
      {
        title: "Mela",
        shortDesc: "Real-world experience in running stalls",
        dateISO: "2025-08-10",
        location: "Innovation Lab",
        accentColor: "#FFA630",
      },
    ],
    /*Hackathons: [
      {
        title: "Lakshya Hack Night",
        shortDesc: "24-hour coding challenge with industry mentors.",
        dateISO: "2025-09-15",
        location: "Engineering Block",
        accentColor: "#FF8C42",
      },
    ],*/
    Competitions: [
      {
        title: "Chronopreneur",
        shortDesc: "Teams craft marketing strategies and fun models for startups in alternate timeline",
        dateISO: "2025-10-05",
        location: "Grand Hall",
        accentColor: "#FF6B35",
      },
    ],
  };

  return (
    <div className="px-4 max-w-6xl mx-auto pb-20">
      {Object.entries(events).map(([category, events], index) => (
        <div key={index} className="mb-16">
          <h2
            className="text-2xl font-bold mb-6 border-b-2 border-white pb-2 inline-block"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {category}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-20">
            {events.map((event, idx) => (
              <EventCard key={idx} event={event} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function EventCard({ event }) {
  return (
    <li className="event-flip-card group">
      <div className="event-flip-card-inner">
        {/* Front Side: Only the Event Name */}
        <div className="event-flip-front">
          {event.title}
        </div>
        {/* Back Side: Details and Learn More Button */}
        <div className="event-flip-back">
          <span style={{
            display: 'inline-block',
            background: event.accentColor,
            color: '#fff',
            padding: '6px 18px',
            borderRadius: '12px',
            fontSize: '0.94rem',
            fontWeight: 700,
            marginBottom: '10px'
          }}>
            {new Date(event.dateISO).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <div style={{color:'#ffe3cb', fontWeight: 400, marginBottom:8, fontSize:'0.97rem'}}>
            <svg className="inline-block mr-2" style={{width:18, height:18, marginBottom:-3}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            {event.location}
          </div>
          <p style={{ color: '#fff', opacity: 0.88, marginBottom: 16, textAlign: 'center' }}>
            {event.shortDesc}
          </p>
          <a href="https://www.instagram.com/ssnlakshya?igsh=MWxuMjU0MTAwaW1pMA==" className="button" target="_blank"
  rel="noopener noreferrer">
            <span>Learn More</span>
          </a>
        </div>
      </div>
    </li>
  );
}

