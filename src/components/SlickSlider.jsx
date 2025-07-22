import React from "react";
import Slider from "react-slick";
import "./SlickSlider.css";

const sliderData = [
  { title: "Tech Hack Night", desc: "24-hour adrenaline coding race.", color: "#FF6B35" },
  { title: "Startup Roundtable", desc: "Panel with founders & investors.", color: "#FFA630" },
  { title: "Design Sprint", desc: "From concept to pitch in a day.", color: "#FF8C00" },
];

export default function SlickSlider() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        {sliderData.map((item, index) => (
          <div key={index} className="slider-card">
            <h2 className="neon-text" style={{ color: item.color }}>
              {item.title}
            </h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
