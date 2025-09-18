import React from "react";
import MoneyAnimation from "../components/MoneyAnimation";
import eventsByCategory from "../data/EventsData";
import "../Events_page_index.css";


function Hero() {
  return (
    <div className="hero-section w-full relative overflow-hidden text-center py-16 px-4">
      {/* Coin animation layer */}
      <MoneyAnimation />

      {/* Hero content */}
      <h1 className="neon-text relative z-10" style={{ fontFamily: "var(--font-display)" }}>
        Events of Lakshya
      </h1>
      <p className="text-xl mb-8 relative z-10" style={{ fontFamily: "var(--font-display)" }}>
        Discover our past workshops, competitions, and networking opportunities
      </p>
    </div>
  );
}

function EventCard({ event }) {
  const accentColor = event.accentColor || "#FF6B35"; // fallback

  return (
    <li className="event-flip-card group">
      <div className="event-flip-card-inner">
        {/* Front Side: Image background with event title */}
        <div
          className="event-flip-front flex items-center justify-center text-white font-bold text-lg"
          style={{
            backgroundImage: `url(${event.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "12px",
            boxShadow: "0 6px 12px rgba(0,0,0,0.3)",
          }}
        >
        </div>

        {/* Back Side: Details */}
        <div className="event-flip-back flex flex-col items-center justify-center p-4 text-center">
          <span
            style={{
              display: "inline-block",
              background: accentColor,
              color: "#fff",
              padding: "6px 18px",
              borderRadius: "12px",
              fontSize: "0.94rem",
              fontWeight: 700,
              marginBottom: "10px",
            }}
          >
            {new Date(event.dateISO).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>

          <div
            style={{
              color: "#ffe3cb",
              fontWeight: 400,
              marginBottom: 8,
              fontSize: "0.97rem",
            }}
          >
            <svg
              className="inline-block mr-2"
              style={{ width: 18, height: 18, marginBottom: -3 }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {event.location}
          </div>

          <p
            style={{
              color: "#fff",
              opacity: 0.88,
              marginBottom: 16,
            }}
          >
            {event.shortDesc}
          </p>
        </div>
      </div>
    </li>
  );
}


function EventsSection() {
  return (
    <div className="px-4 max-w-6xl mx-auto pb-20">
      {Object.entries(eventsByCategory).map(([category, events], index) => (
        <div key={category} className="mb-16">
          <h2
            className="text-2xl font-bold mb-6 border-b-2 border-white pb-2 inline-block"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {category}
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-20">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function EventsPage() {
  return (
    <div className="gradient-bg-shimmer text-white font-display">
      <Hero />
      <EventsSection />
    </div>
  );
}
