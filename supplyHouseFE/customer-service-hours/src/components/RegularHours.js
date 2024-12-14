// src/components/RegularHours.js
import React from "react";
import { regularHours } from "../data";

const RegularHours = () => {
  // Process JSON data into the required display format
  const groupedHours = [
    {
      range: "Monday – Thursday",
      openTime: regularHours.data.find((day) => day.dayOfWeek === "MONDAY").openTime,
      closeTime: regularHours.data.find((day) => day.dayOfWeek === "THURSDAY").closeTime,
    },
    {
      range: "Friday",
      openTime: regularHours.data.find((day) => day.dayOfWeek === "FRIDAY").openTime,
      closeTime: regularHours.data.find((day) => day.dayOfWeek === "FRIDAY").closeTime,
    },
    {
      range: "Saturday – Sunday",
      openTime: regularHours.data.find((day) => day.dayOfWeek === "SATURDAY").openTime,
      closeTime: regularHours.data.find((day) => day.dayOfWeek === "SUNDAY").closeTime,
    },
  ];

  return (
    <div>
      <h3>Customer Service Hours</h3>
      <ul>
        {groupedHours.map((hour, index) => (
          <li key={index}>
            {hour.range}: {formatTime(hour.openTime)} ET – {formatTime(hour.closeTime)} ET
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

export default RegularHours;
