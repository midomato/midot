import React from "react";
import Wave from "react-wavify";

export default function Waves() {
  return (
    <Wave
      fill="url(#gradient)"
      paused={false}
      style={{ display: "block" }}
      options={{
        height: 20,
        amplitude: 30,
        speed: 0.1,
        points: 5,
      }}
    >
      <defs>
        <linearGradient id="gradient" gradientTransform="rotate(90)">
          <stop offset="10%" stopColor="#98ff5dff" />
          <stop offset="90%" stopColor="rgba(0, 231, 143, 1)" />
        </linearGradient>
      </defs>
    </Wave>
  );
}
