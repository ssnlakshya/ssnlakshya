// src/components/MoneyAnimation.jsx
import React, { useMemo, useLayoutEffect, useRef } from "react";

export default function MoneyAnimation({
  numCoins = 6,
  minDur = 8,
  maxDur = 10,
}) {
  const containerRef = useRef(null);

  // Generate stable coin configs once.
  const coins = useMemo(() => {
    const paths = ["p1","p2","p3","p4","p5","p6","p7"];
    const arr = [];
    for (let i = 0; i < numCoins; i++) {
      const dur = rand(minDur, maxDur);
      const delay = rand(0, 4);
      const path = paths[i % paths.length];
      const scale = rand(0.8, 1.2);
      // small bob amp + phase
      const bobAmp = Math.round(rand(4, 8));    // px
      const bobDelay = rand(0, 1.5);            // seconds
      arr.push({ id:i, dur, delay, path, scale, bobAmp, bobDelay });
    }
    return arr;
  }, [minDur, maxDur, numCoins]);

  return (
    <div ref={containerRef} className="lakshya-money-anim" aria-hidden="true">
      {coins.map(c => (
        <LakshyaCoin
          key={c.id}
          path={c.path}
          duration={c.dur}
          delay={c.delay}
          scale={c.scale}
          bobAmp={c.bobAmp}
          bobDelay={c.bobDelay}
        />
      ))}
    </div>
  );
}

function LakshyaCoin({ path, duration, delay, scale, bobAmp, bobDelay }) {
  const style = {
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
    transform: `scale(${scale})`,
    "--lak-bob-amp": `${bobAmp}px`,
    "--lak-bob-delay": `${bobDelay}s`,
  };
  return (
    <div
      className={`lakshya-coin lakshya-coin-${path}`}
      style={style}
      role="presentation"
    >
      <div className="lakshya-coin-bobber">
        <div className="lakshya-coin-3d">
          <span className="lakshya-coin-face front">$</span>
          <span className="lakshya-coin-face back">$</span>
          <span className="lakshya-coin-edge" />
        </div>
      </div>
    </div>
  );
}

function rand(min, max) {
  return +(Math.random() * (max - min) + min).toFixed(2);
}
