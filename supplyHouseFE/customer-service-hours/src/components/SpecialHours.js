// src/components/SpecialHours.js
import React from "react";

const SpecialHours = ({ hours }) => {
  return (
    <div>
      <h3 style={{ color: "red" }}>Special Hours (Today)</h3>
      <ul>
        {hours.map((hour) => (
          <li key={hour.id} style={{ color: "red" }}>
            {formatTime(hour.openTime)} – {formatTime(hour.closeTime)} ({hour.reason})
          </li>
        ))}
      </ul>
    </div>
  );
};

// Helper function to format time (e.g., "08:00:00" -> "8:00 AM")
const formatTime = (time) => {
  const [hour, minute] = time.split(":");
  const isPM = parseInt(hour, 10) >= 12;
  const formattedHour = isPM ? parseInt(hour, 10) - 12 || 12 : parseInt(hour, 10);
  const period = isPM ? "PM" : "AM";
  return `${formattedHour}:${minute} ${period}`;
};

export default SpecialHours;
